//Day2

console.log('Q.1 What are objects in javascript?')
console.log('Ans. In JavaScript, objects are collections of key-value pairs where values can be properties (data) or methods (functions). They allow for storing and organizing data efficiently. In objects we store information in property : value pairs.')

console.log('Q.2 What are funtions?')
console.log('Ans. Funtions are the codes which are wrapped inside braces and can be use multiple times just by calling the funtion name. We can give parameters to the function too.')

console.log('Q.3 What is an event loop and call stack?')
console.log('Ans. The Event Loop helps JavaScript handle tasks asynchronously (like setTimeout). It moves tasks from the queue (background tasks) to the call stack when the stack is empty, ensuring JavaScript remains non-blocking.  The Call Stack is like a to-do list for JavaScript. It keeps track of function calls. When a function is called, it gets added to the top of the stack. When the function is done, it gets removed from the stack.')

console.log('Q.4 What is the DOM?')
console.log('Ans. The DOM (Document Object Model) is a structured representation of an HTML document. It allows JavaScript to interact with, modify, and update web pages dynamically.')

console.log('Q.5 Difference between undefined vs not defined vs NaN.')
console.log('Ans. Undefined : When a variable does not have any value in it defined, then that variable comes out to be undefined.  Not Defined : When variable itself is not defined, that is Not Defined.     NaN : It means Not a Number.')

console.log('Q.6 What are arrow funtions?')
console.log('Ans. Arrow funtions are can be said as shorter version of funtions. In this we dont have to write FUNCTION word. And instead of that we use arrow (=>) in it')

console.log('Q.7 What is for in loop in javascript. Give its syntax')
console.log('Ans. For in loop can be said as other version of for loop. We dont have to write code in for iterating over all the elements in this.')
console.log("for(i in nums){//perform code}")


console.log("Q.8 Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript")

// 1. Local Scope
// Definition: Local scope refers to variables that are defined inside a function or block of code. These variables are accessible only within that specific function or block and are not visible to the outside world (outside the function or block).
// function greet() {
//     let message = "Hello, World!";  // message has local scope
//     console.log(message); // Accessible inside the function
//   }
  
//   greet();
//   console.log(message); // Error: message is not defined outside the function

//   2. Block Scope
// Definition: Block scope refers to variables that are confined to a block, which is typically defined by curly braces {}. Block scope was introduced in ES6 (ECMAScript 2015) through the let and const keywords. Variables declared with let or const inside a block are only accessible within that block.
// Example:

// javascript
// Copy
// if (true) {
//   let blockScopedVariable = "I'm block scoped!";
//   console.log(blockScopedVariable); // Accessible inside the block
// }

// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

// 3. Functional Scope
// Definition: Functional scope refers to the scope of variables declared inside a function. These variables are accessible only within that function and not outside it.



// Example:

// javascript
// Copy
// function add(a, b) {
//   let result = a + b;  // result is function-scoped
//   return result;
// }

// console.log(add(2, 3)); // 5
// console.log(result); // Error: result is not defined outside the function

  

console.log("Q.9 Write code to explain map and filter in arrays")
// 1. map()
// The map() function creates a new array populated with the results of calling a provided function on every element in the calling array. It is generally used to transform each element of the array.
// const numbers = [1, 2, 3, 4, 5];

// // Using map to square each element in the array
// const squares = numbers.map(num => num * num);

// console.log(squares); // Output: [1, 4, 9, 16, 25]
// console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]

// 2. filter()
// The filter() function creates a new array with all elements that pass the test implemented by the provided function. It is generally used to filter out elements from an array based on a condition.
// const numbers = [1, 2, 3, 4, 5];

// // Using filter to get only even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4]
// console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]



console.log("Q.10 Given an array of 0's and 1's find out number of 0's")
// finding zero and ones
// let arr1 = [0,1,1,0,0,,1,0,0];
// let zero = 0;
// let ones = 0;
// for(i = 0 ; i < arr1.length ; i++){
//     if(arr1[i] == 0){
//         zero++
//     }
//     else {
//         ones++
//     }
// }
// console.log( "there are " + zero + " zero");
// console.log("there are " + ones + " ones");



console.log("Q.11 Given an array find out total no. of odd and even nos.")
// finding odd and even numbers

// let arr = [4, 8, 7, 54, 55, 7, 2, 22, 1, 7];
// let even = 0;
// let odd = 0;
// let oddnumber = [] ;
// let evennum = [] ;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     even++
//     evennum.push(arr[i])
//   } else {
//     odd++
//     oddnumber.push(arr[i])
//   }
// }
// console.log("count of even number is" + even);
// console.log( "count of odd number is" + odd);
// console.log( "even num " + evennum);
// console.log("odd numbers" + oddnumber);



console.log("Q.12 Given a string find out number of vowels")
///finding vowels
// let str = "indian" ;
// let vowel = 0;
// for (let i of str) {
//     if(i == "a" || i == "e" || i ==="o" || i ==="i" || i ==="u" )
//     {
//         vowel++;
//     }

// }
// console.log(vowel);