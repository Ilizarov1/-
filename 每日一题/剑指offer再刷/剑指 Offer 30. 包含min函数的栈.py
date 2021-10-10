# https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.A, self.B = [], []

    def push(self, x: int) -> None:
        self.A.append(x)
        n = len(self.B)
        if n == 0:
            self.B.append(x)
        else:
            if x <= self.B[n-1]:
                self.B.append(x)

    def pop(self) -> None:
        nA = len(self.A)
        nB = len(self.B)
        if self.A[nA-1] == self.B[nB-1]:
            self.A.pop()
            self.B.pop()
        else:
            self.A.pop()

    def top(self) -> int:
        return self.A[len(self.A)-1]

    def min(self) -> int:
        return self.B[len(self.B)-1]

        # Your MinStack object will be instantiated and called as such:
        # obj = MinStack()
        # obj.push(x)
        # obj.pop()
        # param_3 = obj.top()
        # param_4 = obj.min()
