# https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
from math import inf
from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = prices[0]
        max_income = -1
        for price in prices:
            if price < min_price:
                min_price = price
            cur_income = price - min_price
            if cur_income > max_income:
                max_income = cur_income
        return max_income
