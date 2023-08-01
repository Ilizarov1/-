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

function quickSort2(arr = [], begin = 0, end = 0) {
    if (begin >= end) {
        return;
    }
    const tmp = arr[begin];
    let i = begin,
        j = end;
    while (i < j) {
        while (arr[j] >= tmp && i < j) j--;
        arr[i] = arr[j];
        while (arr[i] <= tmp && i < j) i++;
        arr[j] = arr[i];
    }
    arr[i] = tmp;
    quickSort2(arr, begin, i - 1);
    quickSort2(arr, i + 1, end);

    return arr;
}

console.log(quickSort2([5, 4, 3, 2, 1], 0, 4));
