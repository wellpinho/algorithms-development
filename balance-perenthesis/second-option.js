function isBalanced(s) {
  if (s.length % 2 !== 0) {
    return "NO";
  }

  s = s.split("");

  let finalArr = [];

  for (var i = 0; i < s.length; i++) {
    let el = s[i];
    console.log(el);

    if (el === "{" || el === "[" || el === "(") {
      finalArr.push(el);
    }

    if (el === "}") {
      let test = finalArr.pop();

      if (test !== "{") {
        console.log("here");
        return "NO";
      }
    }

    if (el === ")") {
      let test = finalArr.pop();

      if (test !== "(") {
        console.log("here");
        return "NO";
      }
    }

    if (el === "]") {
      let test = finalArr.pop();

      if (test !== "[") {
        console.log("here");
        return "NO";
      }
    }
  }

  if (finalArr.length > 0) {
    return "NO";
  }

  return "YES";
}

let str1 = "{[()]}";
let str2 = " {[(])}";
let str3 = "{(([])[])[]}";
let a = isBalanced(str3);
// console.log(a);
