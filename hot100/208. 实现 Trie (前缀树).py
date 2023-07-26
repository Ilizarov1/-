# https://leetcode-cn.com/problems/implement-trie-prefix-tree/
class Trie:

    def __init__(self):
        self.isEnd = False
        self.next = {}

    def insert(self, word: str) -> None:
        ptr = self
        for i in word:
            if ptr.next.get(i) == None:
                ptr.next[i] = Trie()
            ptr = ptr.next[i]
        ptr.isEnd = True

    def search(self, word: str) -> bool:
        ptr = self
        for i in word:
            if ptr.next.get(i) == None:
                return False
            ptr = ptr.next[i]
        return ptr.isEnd

    def startsWith(self, prefix: str) -> bool:
        ptr = self
        for i in prefix:
            if ptr.next.get(i) == None:
                return False
            ptr = ptr.next[i]
        return True


x = Trie()
x.insert('apple')
print(x.search('app'))
print(x.search('apple'))
print(x.startsWith('app'))
