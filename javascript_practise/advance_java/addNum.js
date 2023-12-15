// unlimited arguments
function sumNum() {
  let ans = 0;

  for(i = 0; i < arguments.length;i++){
    ans = ans + arguments[i];
  }
  return ans;
}

let result = sumNum(2,9,58,49,9);
console.log(result);
