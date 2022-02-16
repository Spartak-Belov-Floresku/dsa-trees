/** TreeNode: node for a general tree. */

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

    let total = 0;

    if(this.root){

      let treeQueue = [this.root]

      while(treeQueue.length){

        let current = treeQueue.shift()
        total += current.val;

        for(let child of current.children)
          treeQueue.push(child)

      }
    }

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    let total = 0;

    if(this.root){

      let treeQueue = [this.root]

      while(treeQueue.length){

        let current = treeQueue.shift();
        if(current.val % 2){
          total++;
        }

        for(let child of current.children)
          treeQueue.push(child)

      }
    }

    return total;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    let total = 0;
    let idx = 0;

    if(this.root){

      let treeQueue = [this.root]

      while(treeQueue.length){

        let current = treeQueue.shift();
        
        if(idx === lowerBound){
          total++;
          idx = lowerBound - 1;
        }

        idx++;

        for(let child of current.children)
          treeQueue.push(child)

      }
    }

    return total;

  }
}

module.exports = { Tree, TreeNode };
