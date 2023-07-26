/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
      }
  }
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    function recur(nodeA: TreeNode | null, nodeB: TreeNode | null): boolean {
        // 判断A是否包含B
        // 1. B空，视为包含
        // 2. A空 || A.VAL != B.VAL 视为不包含
        if (!nodeB) return true
        if (!nodeA || nodeA.val !== nodeB.val) return false
        return recur(nodeA.left, nodeB.left) && recur(nodeA.right, nodeB.right)
    }
    
    if (!A || !B) return false

    return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)

};