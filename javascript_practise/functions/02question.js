// random string generate from an array

let  randomStr = (array) =>{

  // random index generation  in the limit of array.length
  const randomIndex = Math.floor(Math.random()*array.length);
  console.log(randomIndex);

  // lets take the random string
  const answer = array[randomIndex];
  return answer;
}

const stringsArray = ["banana","mango","apple","pineapple","peach"];

console.log(randomStr(stringsArray));