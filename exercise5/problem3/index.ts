function printAsyncNumbers(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

export default printAsyncNumbers;
