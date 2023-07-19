class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a node with the given value into the tree
    insert(value) {
      const node = new TreeNode(value);
      if (!this.root) {
        this.root = node;
      } else {
        this._insertNode(this.root, node);
      }
    }
  
    // Helper method to recursively insert a node into the tree
    _insertNode(current, node) {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
        } else {
          this._insertNode(current.left, node);
        }
      } else if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
        } else {
          this._insertNode(current.right, node);
        }
      }
    }
  
    // Search for a node with the given value in the tree
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    // Helper method to recursively search for a node in the tree
    _searchNode(current, value) {
      if (!current) {
        return null;
      } else if (current.value === value) {
        return current;
      } else if (value < current.value) {
        return this._searchNode(current.left, value);
      } else if (value > current.value) {
        return this._searchNode(current.right, value);
      }
    }
  
    // Traverse the tree in order and call the given callback function on each node
    traverse(callback) {
      this._traverseInOrder(this.root, callback);
    }
  
    // Helper method to recursively traverse the tree in order
    _traverseInOrder(node, callback) {
      if (node) {
        this._traverseInOrder(node.left, callback);
        callback(node.value);
        this._traverseInOrder(node.right, callback);
      }
    }
  }
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(1);
  tree.insert(4);
  tree.insert(6);
  tree.insert(8);
  
  tree.traverse(console.log); // Output: 1, 3, 4, 5, 6, 7, 8
  
  console.log(tree.search(4)); // Output: TreeNode { value: 4, left: null, right: null }
  console.log(tree.search(2)); // Output: null
    