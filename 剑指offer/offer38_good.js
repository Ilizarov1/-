/**
 * @param {string} s
 * @return {string[]}
 */

var permutation = function (s) {
    if (s == null) return null;
    if (s.length == 1) return [s];
    let res = new Array();
    let c = null;
    c = Array.from(s);
    var swap = function (a, b) {
        let tmp = c[a];
        c[a] = c[b];
        c[b] = tmp;
    };
    function dfs(x) {
        if (x == c.length - 1) {
            res.push(c.join(""));
            return;
        }
        var set = new Set();
        for (let i = x; i < c.length; i++) {
            if (set.has(c[i]))
                continue;//重复剪枝
            set.add(c[i]);
            swap(i, x);
            dfs(x + 1);
            swap(x, i);
        }
    }
    dfs(0);
    return res;
};



console.log(permutation("aab"));