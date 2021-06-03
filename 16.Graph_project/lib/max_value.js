function maxValue(node) {
  let visited = new Set();
  let queue = [node];
  let maxVal = -Infinity;

  while (queue.length) {
    let currNode = queue.shift();
    if (visited.has(currNode.val)) continue;

    if (currNode.val > maxVal) maxVal = currNode.val;
    visited.add(currNode.val);

    queue.push(...currNode.neighbors);
  }

  return maxVal;
}

module.exports = {
  maxValue,
};
