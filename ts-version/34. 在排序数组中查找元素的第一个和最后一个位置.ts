function searchRange(nums: number[], target: number): number[] {
    // Array APi
    return [nums.indexOf(target), nums.lastIndexOf(target)];
}
function searchRange2(nums: number[], target: number): number[] {
    // 二分搜索
    function searchLeft(nums: number[], target: number) {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            }
        }

        if (left < 0 || nums[left] !== target) {
            return -1;
        }

        return left;
    }

    function searchRight(nums: number[], target: number) {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            }
        }

        if (right >= nums.length || nums[right] !== target) {
            return -1;
        }
        return right;
    }

    return [searchLeft(nums, target), searchRight(nums, target)];
}
