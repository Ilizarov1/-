function lengthOfLIS(nums: number[]): number {
    // 动态规划 n^2
    const map = {};
    let res = 1;
    nums.forEach((n, idx) => {
        let max = 0;
        for (let i = 0; i < idx; i++) {
            if (n > nums[i]) {
                max = Math.max(max, map[nums[i]]);
            }
        }
        map[n] = max + 1;
        res = map[n] > res ? map[n] : res;
    });

    return res;
}

function lengthOfLIS2(nums: number[]): number {
    // 动态规划+二分 nlogn
    const tails: number[] = [];
    let res = 0;

    for (const n of nums) {
        let i = 0,
            j = res;
        while (i < j) {
            const m = Math.floor((i + j) / 2);
            if (tails[m] < n) i = m + 1;
            if (tails[m] >= n) j = m;
        }
        tails[i] = n;
        if (i === res) {
            res += 1;
        }
    }
    return res;
}

console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
