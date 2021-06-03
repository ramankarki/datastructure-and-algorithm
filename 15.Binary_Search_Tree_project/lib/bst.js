class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.nodesCount = 0;
  }

  insert(val, root = this.root) {
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < root.val) {
      if (!root.left) root.left = newNode;
      else this.insert(val, root.left);
    } else {
      if (!root.right) root.right = newNode;
      else this.insert(val, root.right);
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;

    if (root.val === val) return true;
    else if (val < root.val) return this.searchRecur(val, root.left);
    else return this.searchRecur(val, root.right);
  }

  searchIter(val) {
    if (!this.root) return false;

    let node = this.root;

    while (node) {
      if (val === node.val) return true;
      else if (val < node.val) node = node.left;
      else node = node.right;
    }

    return false;
  }
}

module.exports = {
  TreeNode,
  BST,
};
