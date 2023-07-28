function coinChange1(coins: number[], amount: number): number {
    // 暴力递归
    // dp(n) 凑出 n 最少需要的硬币数
    function dp(coins: number[], amount: number) {
        // 基本状态
        if (amount === 0) return 0;
        if (amount < 0) return -1;

        let res = Infinity;
        coins.forEach((coin) => {
            const sub = dp(coins, amount - coin);
            // 子问题无解
            if (sub < 0) return;

            res = Math.min(res, 1 + sub);
        });

        return res;
    }
    const ret = dp(coins, amount);
    return ret === Infinity ? -1 : ret;
}

function coinChange2(coins: number[], amount: number): number {
    // 备忘录优化，剪掉重复子问题, 自顶向下
    // dp(n) 凑出 n 最少需要的硬币数
    const max = amount + 1;
    const memo = Array(max).fill(max);
    function dp(coins: number[], amount: number) {
        // 基本状态
        if (amount === 0) return 0;
        if (amount < 0) return -1;

        if (memo[amount] !== max) {
            return memo[amount];
        }

        let res = Infinity;
        coins.forEach((coin) => {
            const sub = dp(coins, amount - coin);
            // 子问题无解
            if (sub === -1) return;

            res = Math.min(res, 1 + sub);
        });

        memo[amount] = res === Infinity ? -1 : res;
        return memo[amount];
    }
    return dp(coins, amount);
}

function coinChange3(coins: number[], amount: number): number {
    // 自底向上，剪掉重复子问题
    // dp(n) 凑出 n 最少需要的硬币数
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i < amount + 1; i++) {
        coins.forEach((coin) => {
            if (i - coin < 0) return;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        });
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
}
