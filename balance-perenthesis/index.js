function peek(stack) {
  return stack[stack.length - 1];
}

function isBlanced(str) {
  let stack = [];

  stack.push();
  stack.pop();

  // iterate through every letter of the string
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);

    //if the letter is an opening paren push it on tyhe stack
    if (letter === "(") {
      stack.push(letter);
    }

    if (letter === ")") {
      // if the letter is a closing paren make sure it has matching opening peran
      if (peek(stack) === "(") {
        stack.pop();
      } else false;
    }
  }

  return stack.length === 0;
}

console.log("True cases");
console.log(isBlanced("()"));
console.log(isBlanced("(())"));
console.log(isBlanced("((()))"));

console.log("False cases");
console.log(isBlanced("("));
console.log(isBlanced(")"));
console.log(isBlanced(")("));
console.log(isBlanced("(()"));
console.log(isBlanced("())"));
