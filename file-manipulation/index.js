function addUp(logs, quantity) {
  const mapped = logs.reduce((acc, curr) => {
    return acc + curr + " ";
  }, []);

  const response = 
  // const response = [...mapped].reduce((acc, curr) => {
  //   if (acc === curr) {
  //     user.push(`ID: ${curr} Transactions: ${1}`);
  //   }
  // }, []);

  return mapped;
}

const log = ["99 88 133", "99 47 11", "12 12 02", "99 74 11"];
const value = 2;

const response = addUp(log, value);
console.log(response);
