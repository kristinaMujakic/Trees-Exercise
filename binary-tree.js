class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root) {
      return 0;
    }

    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length > 0) {
      const { node, depth } = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    if (!this.root) {
      return 0;
    }

    const maxDepthHelper = (node) => {
      if (!node) {
        return 0;
      }

      const leftDepth = maxDepthHelper(node.left);
      const rightDepth = maxDepthHelper(node.right);

      return Math.max(leftDepth, rightDepth) + 1;
    };

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    const maxSumHelper = (node) => {
      if (!node) {
        return { pathSum: 0, maxSum: Number.NEGATIVE_INFINITY };
      }

      const left = maxSumHelper(node.left);
      const right = maxSumHelper(node.right);

      const pathSum = Math.max(node.val, node.val + left.pathSum, node.val + right.pathSum);
      const maxSum = Math.max(left.maxSum, right.maxSum, pathSum, node.val + left.pathSum + right.pathSum);

      return { pathSum, maxSum };
    };

    const result = maxSumHelper(this.root);
    return result.maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    let result = null;

    const nextLargerHelper = (node) => {
      if (!node) {
        return;
      }

      if (node.val > lowerBound) {
        if (!result || node.val < result) {
          result = node.val;
        }
      }

      if (node.left) {
        nextLargerHelper(node.left);
      }

      if (node.right) {
        nextLargerHelper(node.right);
      }
    };

    nextLargerHelper(this.root);
    return result;
  }


}

module.exports = { BinaryTree, BinaryTreeNode };
