// 排序 + 双指针
function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) return [];

    nums.sort((a, b) => a - b);
    console.log('sort:', nums);
    const result: number[][] = [];
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        // console.log('index, num:', index, num);

        if (num > 0) break;

        // 排除重复解
        if (index > 0 && num === nums[index - 1]) continue;

        let l = index + 1,
            r = nums.length - 1;

        while (l < r) {
            if (num + nums[l] + nums[r] === 0) {
                // console.log('index, num:', index, num);
                result.push([num, nums[l], nums[r]]);
                // 关键：排除重复解
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;

                l++;
                r--;
            } else if (num + nums[l] + nums[r] > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    return result;
}

console.log(threeSum([-2, 0, 0, 2, 2]));
