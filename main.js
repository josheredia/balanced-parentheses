function verify() {
  const text = document.getElementById("text").value;
  const result = document.getElementById("result");
  result.innerHTML = isBalanced(text);
}

function isBalanced(str) {
  let stack = 0;
  let emojis = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack += 1;
      // Find a sad emoji
      if (str[i - 1] === ":") {
        emojis += 1;
      }
    }
    if (str[i] === ")") {
      stack -= 1;
      // Find a happy emoji
      if (str[i - 1] === ":") {
        emojis += 1;
      }
    }
  }
  return stack === 0 || Math.abs(stack) <= emojis ? "Balanced" : "Unbalanced";
}
