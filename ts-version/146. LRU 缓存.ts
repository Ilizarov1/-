class ListNode {
    value: number;
    key: number;
    next: ListNode;
    prev: ListNode;

    constructor(key: number, value: number, next?: ListNode, prev?: ListNode) {
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.key = key;
    }
}

class LRUCache {
    hash: Map<number, ListNode>;
    length: number;
    cache: ListNode;
    tail: ListNode;
    capacity: number;

    constructor(capacity: number) {
        this.hash = new Map();
        this.cache = null;
        this.capacity = capacity;
        this.length = 0;
    }

    get(key: number): number {
        if (!this.hash.has(key)) return -1;

        const node = this.hash.get(key);

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.next = this.cache;
        this.cache.prev = node;
        node.prev = null;
        this.cache = node;

        return node.value;
    }

    put(key: number, value: number): void {
        const newNode = new ListNode(key, value);
        if (this.length < this.capacity) {
            this.hash.set(key, newNode);
        }

        if (this.length >= this.capacity) {
            this.hash.set(key, newNode);
            this.hash.delete(this.tail.key);
            this.tail = this.tail.prev;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
