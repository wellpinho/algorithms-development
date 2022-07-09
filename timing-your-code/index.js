// Wellington Pinho
function addUp(n) {
  let total = 0;

  for (let i = 1; i < n; i++) {
    total += 1;
  }

  return total;
}

let t1 = performance.now();
addUp(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed 1: ${(t2 - t1) / 1000} seconds.`);

// making the function cleaner
const addUp2 = (n) => (n * (n + 1)) / 2;

let time1 = performance.now();
addUp2(1000000000);
let time2 = performance.now();
console.log(`Time Elapsed 1: ${(time2 - time1) / 1000} seconds.`);
