function mulNum() {
  // let ans = 0;
  ans = 1;

  for (let  i = 0; i < arguments.length; i++) {
    ans = ans * arguments[i];
  }
  return ans;
}

console.log(mulNum(7,9));