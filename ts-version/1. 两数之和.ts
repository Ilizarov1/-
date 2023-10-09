function twoSum(numbers: number[], target: number) {
    const map = new Map<number, number>();
    const result: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (map.has(target - numbers[i])) {
            result.push(map.get(target - numbers[i])!);
            result.push(i);
            break;
        }
        map.set(numbers[i], i);
    }

    return result;
}
