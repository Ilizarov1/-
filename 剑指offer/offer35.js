/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let hashTable = new Object();
    let p = head; let i = 0;
    if (p == null) return null;
    while (p != null) {//构建哈希表
        p.seq = i++;
        hashTable[p.seq] = new Node(p.val, null, null);
        p = p.next;
    }
    p = head;
    while (p != null) {//连接
        if (p.random != null) 
            hashTable[p.seq].random = hashTable[p.random.seq];
        if (p.next != null)
            hashTable[p.seq].next = hashTable[p.next.seq];
        p = p.next;
    }
    p = hashTable[head.seq];
    return hashTable[0];
    
};

var n1 = new Node(7, null, null);
var n2 = new Node(13, null, null);
var n3 = new Node(11, null, null);
var n4 = new Node(10, null, null);
var n5 = new Node(1, null, null);
n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n5;
n2.random = n1; n3.random = n5; n4.random = n3; n5.random = n1;
console.log(copyRandomList(n1));
