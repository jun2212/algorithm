/**
 *
 * Detect if the given brackets are balanced
 *
 * balancedBrackets('({[]})({[]})');    // true
 *
 * balancedBrackets('{([)]}');          // false
 *
 *
 */

function balancedBrackets(string) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of string) {
    if (char in pairs) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (char !== pairs[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
