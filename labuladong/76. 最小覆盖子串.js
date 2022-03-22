/**https://leetcode-cn.com/problems/minimum-window-substring/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return '';
    const need = new Map(),
        wnd = new Map();
    let start = 0,
        len = s.length + 1;
    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    let left = 0,
        right = 0;
    let vaild = 0;
    // 扩张窗口
    while (right < s.length) {
        const c = s[right];
        right++;
        if (need.has(c)) {
            wnd.set(c, (wnd.get(c) || 0) + 1);
            if (wnd.get(c) === need.get(c)) vaild++;
        }
        // 决定收缩窗口
        while (vaild === need.size) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            const d = s[left];
            left++;
            if (need.has(d)) {
                if (wnd.get(d) === need.get(d)) vaild--;
                wnd.set(d, wnd.get(d) - 1);
            }
        }
    }
    return len === s.length + 1 ? '' : s.substr(start, len);
};
console.log(minWindow('ADOBECODEBANC', 'ABC'));
