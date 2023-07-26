function mergeSort(arr = []) {
    function merge(llo, lhi, rlo, rhi) {
        let ptr1 = llo;
        let ptr2 = rlo;
        const tmp = [];
        while (ptr1 <= lhi && ptr2 <= rhi) {
            if (arr[ptr1] <= arr[ptr2]) {
                tmp.push(arr[ptr1++]);
            } else {
                tmp.push(arr[ptr2++]);
            }
        }
        while (ptr1 <= lhi) {
            tmp.push(arr[ptr1++]);
        }
        while (ptr2 <= rhi) {
            tmp.push(arr[ptr2++]);
        }
        tmp.forEach((val, index) => {
            arr[llo + index] = val;
        });
    }
    function partition(start, end) {
        // base
        if (start === end) {
            return;
        }
        const mid = Math.floor((start + end) / 2);
        partition(start, mid);
        partition(mid + 1, end);
        merge(start, mid, mid + 1, end);
    }
    partition(0, arr.length - 1);
}
const arr = [2, 3, 9, 7, 5];
mergeSort(arr);
console.log(arr);
