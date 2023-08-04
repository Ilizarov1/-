function maxSubArray(nums: number[]): number {
    let sum = 0;
    let max = -Infinity;

    for (const num of nums) {
        if (num > sum + num) {
            // 当前数字+前序 < 当前数字
            sum = 0;
        }
        sum += num;
        max = max < sum ? sum : max;
    }

    return max;
}
