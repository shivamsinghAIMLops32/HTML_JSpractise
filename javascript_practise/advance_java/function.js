// A block of statement which can reuse

// function add two number

// const sum = () => {
//      console.log(num1 + num2);
// }

function sum(a, b){
    return(a + b);
}

const mul = (a ,b) => {
  return(a*b);
}

// * its good paractise to return a number
const num1 =  7;
const num2 = 9;
console.log(sum(num1, num2));
console.log(mul(num1, num2));