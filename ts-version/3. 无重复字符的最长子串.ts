function lengthOfLongestSubstring(s: string): number {
    // 暴力模拟
    let res = 0;
    s.split('').forEach((_, idx, arr) => {
        const tmp: string[] = [];
        for (let i = idx; i < s.length; i++) {
            if (tmp.includes(arr[i])) {
                break;
            }
            tmp.push(arr[i]);
        }
        res = tmp.length > res ? tmp.length : res;
    });
    return res;
}

function slideWindow(s: string): number {
    // 滑动窗口
    // 无重复，调整右边界
    // 有重复，调整左边界
    // 需要知道重复字符索引位置
    let ans = 0;
    let res: string[] = [];
    const arr = s.split('');

    arr.forEach((val) => {
        const repeat = res.indexOf(val);
        if (repeat !== -1) {
            res.splice(0, repeat + 1);
        }
        res.push(val);
        ans = Math.max(res.length, ans);
    });
    return ans;
}
