const RoutePrio = {
  STATIC: 0,
  PARAM: 1,
  WILDCARD: 2,
};

export const buildTrie = (models, routes) => {
  const routeTrieInput = [];

  for (const r of routes) {
    const m = models[r];

    routeTrieInput.push({
      uniqueName: m.uniqueName,
      fullPath: `${m.method}/${m.path}`,
    });
  }

  return buildRouteTrie(routeTrieInput);
};

function buildRouteTrie(input) {
  const trie = createNode("");
  addHttpMethods(trie);

  for (const r of input) {
    addRoute(
      trie,
      r.fullPath.split("/").filter((it) => it.trim() !== ""),
      r.uniqueName,
    );
  }

  // Don't collapse top level
  for (const child of trie.children) {
    cleanTrieAndCollapse(child);
  }

  // Remove unneeded 'HTTP-method' children
  trie.children = trie.children.filter(
    (it) => it.children.length > 0 || it.uniqueName !== undefined,
  );

  sortTrie(trie);

  return convertToGeneratorTrie(trie);
}

/**
 *
 * @param {string} path
 * @param {string} [uniqueName]
 */
function createNode(path, uniqueName) {
  let prio = RoutePrio.STATIC;
  if (path === "*") {
    prio = RoutePrio.WILDCARD;
  } else if (path.startsWith(":")) {
    prio = RoutePrio.PARAM;
  }

  return {
    children: [],
    prio,
    path,
    uniqueName,
    parent: undefined,
  };
}

function convertToGeneratorTrie(trie) {
  let result = {
    uniqueName: trie.uniqueName || undefined,
    children: trie.children.map((it) => convertToGeneratorTrie(it)),
  };

  if (trie.prio === RoutePrio.STATIC) {
    result.prio = "STATIC";
    result.staticPath = trie.path;
  } else if (trie.prio === RoutePrio.PARAM) {
    result.prio = "PARAM";
    result.paramName = trie.path.substring(1);
  } else if (trie.prio === RoutePrio.WILDCARD) {
    result.prio = "WILDCARD";
  }

  return result;
}

function addChildNodes(parent, ...children) {
  for (const child of children) {
    child.parent = parent;
    parent.children.push(child);
  }
}

function addHttpMethods(trie) {
  addChildNodes(
    trie,
    createNode("GET"),
    createNode("POST"),
    createNode("PUT"),
    createNode("DELETE"),
    createNode("HEAD"),
  );
}

function addRoute(trie, path, uniqueName) {
  const currentPath = path[0];

  let child = trie.children.find((it) => it.path === currentPath);
  if (!child) {
    child = createNode(currentPath);
    if (trie.prio === RoutePrio.WILDCARD) {
      throw new Error("Can't have sub routes on wildcard routes");
    }
    addChildNodes(trie, child);
  }

  if (path.length === 1) {
    child.uniqueName = uniqueName;
  } else {
    addRoute(child, path.slice(1), uniqueName);
  }
}

function cleanTrieAndCollapse(trie) {
  // Remove nodes without name & without children
  trie.children = trie.children.filter(
    (it) => it.uniqueName !== undefined || it.children.length > 0,
  );

  for (const child of trie.children) {
    cleanTrieAndCollapse(child);
  }

  if (trie.children.length > 0) {
    collapseStaticChildren(trie);
  }
}

function collapseStaticChildren(trie) {
  if (trie.uniqueName !== undefined || trie.parent === undefined) {
    return;
  }

  for (const child of trie.children) {
    if (child.prio !== RoutePrio.STATIC || trie.prio !== RoutePrio.STATIC) {
      return;
    }
  }

  const parent = trie.parent;
  const path = trie.path;

  // delete latest reference
  parent.children = parent.children.filter((it) => it !== trie);
  trie.parent = undefined;

  for (const child of trie.children) {
    child.path = `${path}/${child.path}`;
    addChildNodes(parent, child);
  }
}

/**
 * Sort trie recursively, putting prio in order from low to high, and longer routes first
 */
function sortTrie(trie) {
  trie.children = trie.children.sort((a, b) => {
    const result = a.prio - b.prio;
    if (result !== 0) {
      return result;
    }

    return b.path.length - a.path.length;
  });

  for (const child of trie.children) {
    sortTrie(child);
  }
}
