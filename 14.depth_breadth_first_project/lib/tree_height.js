function treeHeight(root) {
  if (!root) return -1;
  if (!root.left && !root.right) return 0;

  let queue = [root];
  let nodeCount = 0;

  while (queue.length) {
    let node = queue.shift();
    nodeCount++;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  if (nodeCount % 2 === 0) {
    return nodeCount / 2 + 1;
  }
  return Math.trunc(nodeCount / 2);
}

module.exports = {
  treeHeight,
};
