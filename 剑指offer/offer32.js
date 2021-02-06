/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (root == null) return [];
    let arr = new Array();
    let res = new Array();

    arr.push(root);
    while (arr.length != 0) {
        let temp = arr.shift();
        res.push(temp.val);
        if (temp.left != null)
            arr.push(temp.left);
        if (temp.right != null)
            arr.push(temp.right);
    }
    return res;

};

var levelOrder2 = function (root) {
    if (root == null) return [];
    let arr = new Array();
    let res = new Array();
    let last = root;
    let res1 = new Array();
    res.push(res1);
    let i = 0;
    arr.push(root);
    while (arr.length != 0) {
        let temp = arr.shift();
        res[i].push(temp.val);
        if (temp.left != null)
            arr.push(temp.left);
        if (temp.right != null)
            arr.push(temp.right);
        if (temp == last && arr.length != 0) {//本层最后一个
            let newArr = new Array();
            res.push(newArr);
            i++;
            last = arr[arr.length - 1];//指向下一层最后一个
        }
    }
    return res;
};

var levelOrder3 = function (root) {
    if (root == null) return [];
    let arr = new Array();
    let res = new Array();
    let i = 0; let turn = true;//交替控制
    arr.push(root);
    let len = arr.length;
    let q = new Array();
    q.push(root.val);
    while (arr.length != 0) {//交替层次遍历
        if (turn) {
            res.push(q);
        } else {
            res.push(q.reverse());
        }
        
        q = new Array();
        let temp = null;
        for (let j = 0; j < len; j++){
            temp = arr.shift();
            
            if (temp.left != null) {
                arr.push(temp.left);
                q.push(temp.left.val);
            }
                
            if (temp.right != null) {
                arr.push(temp.right);
                q.push(temp.right.val);
            }
                
            
            
        }

        len = arr.length;
        i++;
        turn = !turn;


    }
    return res;
};
var root = new TreeNode(1);
var n1 = new TreeNode(2);
var n2 = new TreeNode(3);
var n3 = new TreeNode(4);
var n4 = new TreeNode(5);
root.left = n1;
root.right = n2;
n1.left = n3;
n2.left = n4;
console.log(levelOrder3(root));