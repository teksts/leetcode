/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parens = {'(': ')', '[': ']', '{': '}',}
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      if (parens[s[i]]) {
          stack.push(s[i]);
      } else if (parens[stack[stack.length - 1]] !== s[i]) {
          return false
      } else {
          stack.pop()
      }
  }
  if (stack.length > 0) {
      return false
  }
  return true
};