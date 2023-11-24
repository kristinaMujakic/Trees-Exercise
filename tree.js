class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    const sumValuesHelper = (node) => {
      if (!node) {
        return 0;
      }

      let sum = node.val;

      for (const child of node.children) {
        sum += sumValuesHelper(child);
      }

      return sum;
    };

    return sumValuesHelper(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    let count = 0;

    const countEvensHelper = (node) => {
      if (!node) {
        return;
      }

      if (node.val % 2 === 0) {
        count++;
      }

      for (const child of node.children) {
        countEvensHelper(child);
      }
    };

    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;

    const numGreaterHelper = (node) => {
      if (!node) {
        return;
      }

      if (node.val > lowerBound) {
        count++;
      }

      for (const child of node.children) {
        numGreaterHelper(child);
      }
    };

    numGreaterHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
