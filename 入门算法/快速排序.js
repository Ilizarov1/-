function quickSort(arr = []) {
    function partition(lo, hi) {
        const privot = arr[lo];
        let ptr1 = lo;
        let ptr2 = hi;
        while (ptr1 < ptr2) {
            while (ptr1 < ptr2 && arr[ptr2] > privot) ptr2--;
            arr[ptr1] = arr[ptr2];
            while (ptr1 < ptr2 && arr[ptr1] < privot) ptr1++;
            arr[ptr2] = arr[ptr1];
        }
        arr[ptr1] = privot;
        return ptr1;
    }
    function quick(lo, hi) {
        if (lo >= hi) return;
        const pIdx = partition(lo, hi);
        quick(lo, pIdx);
        quick(pIdx + 1, hi);
    }
    quick(0, arr.length - 1);
}
const arr = [2, 5, 11, 9];
quickSort(arr);
console.log(arr);
