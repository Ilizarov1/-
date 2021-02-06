/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let dp = new Array();
  let chars = Array.from(num.toString());
  dp[0] = 1;
  dp[1] = 1; //空和1个数字都是1种
  for (let i = 1; i < chars.length; i++) {
    let range = parseInt(chars[i - 1]) * 10 + parseInt(chars[i]);
    if (range >= 10 && range <= 25) dp[i + 1] = dp[i] + dp[i - 1];
    else dp[i + 1] = dp[i];
  }
  return dp[dp.length - 1];
};
console.log(translateNum(25));
Object.keys();
