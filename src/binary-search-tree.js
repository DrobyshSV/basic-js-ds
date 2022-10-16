const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    head = null

    root() {
        return this.head
    }

    add(data) {
        const addNode = (node, data) => {
            if (node === null) {
                return new Node(data)
            }
            if (node.data === data) {
                return data
            }
            if (data > node.data) {
                node.right = addNode(node.right, data)
            } else {
                node.left = addNode(node.left, data)
            }
            return node
        }
        this.head = addNode(this.head, data)
    }

    has(data) {
        const hasNode = (node, data) => {
            if (node === null) {
                return false
            }
            if (node.data === data) {
                return true
            }
            if (data > node.data) {
                return hasNode(node.right, data)
            } else {
                return  hasNode(node.left, data)
            }
        }
        return hasNode(this.head, data)
    }

    find(data) {
        let node = this.root();
        while (node) {
            if (data > node.data) {
                node = node.right
            } else if (data < node.data) {
                node = node.left
            } else if (data = node.data) {
                return node
            }
        }
        return null
    }

    remove(data) {

    }

    min() {
        let min = this.root();
        while (min.left) {
            min = min.left
        }
        return min.data
    }

    max() {
        let max = this.root();
        while (max.right) {
            max = max.right
        }
        return max.data
    }
}

module
    .exports = {
    BinarySearchTree
};