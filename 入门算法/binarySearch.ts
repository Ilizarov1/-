function binarySearch(arr: number[], target: number) {
    let l = 0,
        r = arr.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (arr[mid] > target) {
            r = mid - 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}
