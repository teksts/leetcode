/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let candidate = Infinity;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] - candidate > profit) {
          buy = candidate;
          profit = prices[i] - buy;
      }
      else if (prices[i] - buy > profit) {
          profit = prices[i] - buy;
      }
      else if (prices[i] < buy && prices[i] < candidate) {
          candidate = prices[i]
      }
  }
  return profit;
};