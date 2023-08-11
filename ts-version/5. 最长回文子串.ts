function longestPalindrome(s: string): string {
    let maxStart = 0,
        maxLen = 0,
        len = 1;
    for (let i = 0; i < s.length; i++) {
        let left = i - 1,
            right = i + 1;
        while (left >= 0 && s.charAt(i) === s.charAt(left)) {
            len++;
            left--;
        }
        while (right < s.length && s.charAt(right) === s.charAt(i)) {
            len++;
            right++;
        }
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            len += 2;
            left--;
            right++;
        }

        if (len > maxLen) {
            maxLen = len;
            maxStart = left;
        }
        len = 1;
    }

    return s.substring(maxStart + 1, maxStart + 1 + maxLen);
}

console.log(longestPalindrome('a'));
