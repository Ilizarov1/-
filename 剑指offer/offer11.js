/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    var i = 0, j = numbers.length-1, m;
    while (i < j) {
        m = parseInt((i + j) / 2);
        if (numbers[m] > numbers[j]) {
            i = m+1 ;
        } else if (numbers[m] < numbers[j]) {
            j = m ;
        } else j--;
    }
    return numbers[i];
};
console.log(minArray([2,2,2,0,1]));