class Solution:
    def maximumTime(self, time: str) -> str:
        idx = time.find('?')
        while idx != -1:
            if idx == 0:
                if time[1] != '?' and int(time[1]) > 3:
                    time = time.replace('?', '1', 1)
                else:
                    time = time.replace('?', '2', 1)
            elif idx == 1:
                if time[0] == '1' or time[0] == '0':
                    time = time.replace('?', '9', 1)
                else:
                    time = time.replace('?', '3', 1)
            elif idx == 3:
                time = time.replace('?', '5', 1)
            else:
                time = time.replace('?', '9', 1)
            idx = time.find('?', idx+1)
        return time


x = Solution()
print(x.maximumTime("1?:22"))
