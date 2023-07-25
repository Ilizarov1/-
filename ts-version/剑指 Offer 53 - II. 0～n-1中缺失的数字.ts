function missingNumber(nums: number[]): number {
    let [i, j] = [0, nums.length - 1];
    let m = Math.floor((i + j) / 2);
    while (i <= j) {
        if (nums[m] === m) {
            i = m + 1;
        }
        if (nums[m] !== m) {
            j = m - 1;
        }
        m = Math.floor((i + j) / 2);
    }

    return j;
}
