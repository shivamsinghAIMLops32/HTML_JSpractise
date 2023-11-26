// basic function declaration

function helloWorld(){
  return helloWorld;
};

console.log(helloWorld());

// ADD two numbers x and y and Return sum

function addNum(num1,num2){
  return num1+num2;
};

console.log(addNum(5,9));
console.log(typeof addNum());              // number as output


// other type of functions

// 1. function expression 

// greater number after compariing two number

const greatorNum = function(numb1,numb2){
  if(numb1 > numb2){
    return `num1 ${numb1} is greator than num2 ${numb2}`;
  }
  else if(numb1 ===  numb2){
    return ` both num1 ${numb1} and num2 ${numb2} are equal`;
  }
  else{
    return `num2 ${numb2} is greator than num1 ${numb1}`;
  }
  
};

console.log(greatorNum(7,-3));


// ARROW function

// Check if a given string is plaindrome or not

const isPalindrome = (str) =>{
  
  // remove non-alphanumeric char and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for( let i = 0; i < cleanStr.length / 2; i++){
    if(cleanStr[i] != cleanStr[cleanStr.length-1-i]){
      return false;   // not a palindrome
    }
  }
  return true;   //  a palindromme 
}

const testString = "A man, a plan, a dam, banana!";
console.log(isPalindrome(testString));



