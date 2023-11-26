// a recursion is a function which calls itself until a specific condition met(base condition).

// QUE1:- PRINT NAME n TIMES

const printName =(n) =>{
  if( n > 5){
    return;
  }
  console.log("shivam");

  printName(n+1);
}

const n = 1;
printName(n);

// another way

const printingName = (count) =>{
  if(count === 0){
    return;
  }
  console.log("shiavam");

  printingName(--count);
};

const count = 5;
printingName(count);



// QUE2 :- print number K times.

const printNum = (i,k) =>{
  if(i>k){
    return;
  }

  console.log(i);
  printNum(i+1,k);
};

printNum(1,5);


// QUE3 :- print number from k to 1
const printBack = (i,n) =>{
  if(i<n){
    return;
  }

  console.log(i);
  printBack(--i,n);
}

printBack(5,1);

