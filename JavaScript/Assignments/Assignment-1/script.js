// Q.1 Add two numbers

// function addTwoNumbers(a, b){
//     let sum = a + b
//     console.log(sum)
// }

// let a = 10
// let b = 20
// console.log(addTwoNumbers(a,b))


//Q.2 Find if the conditions are obeyed or not

// function is_Valid(a, b){
//     if(a > b){
//         console.log('True')
//     }else{
//         console.log('False')
//     }
// }
// let a = 5
// let b = 7
// is_Valid(a,b)

//Q.3 Check the condition

// function check(a,b){
//     if (a % 10 == 0 && b % 10 == 0){
//         console.log('True')
//     }else if(a % 10 == 0 || b % 10 == 0){
//         console.log('True')
//     }else{
//         console.log('False')
//     }
// }

// let a = 23
// let b = 31
// check(a,b)

//Q.4 Find the first digit of a 4 digit number

// function firstDigit(n){
//     let first_digit = n / 1000
//     first_digit = Math.floor(first_digit)
//     return first_digit
// }

// let num = 5644
// console.log(firstDigit(num))

//Q.5 Find the last digit of a 4 digit number

// function lastDigit(n){
//     let last_digit = n % 10
//     return last_digit
// }
// let num = 9870
// console.log(lastDigit(num))

//Q.6 Find the remainder

// let a = 26
// let b = 3
// let remainder = a % b
// console.log(remainder)

//Q.7 Multiply two numbers

// let a = 26
// let b = 3
// let multiply = a * b
// console.log(multiply)

//Q.8 Marks Calculator

function totalMarks(a,b,c){
    let sum = a + b + c
    return sum
}
function avg(Marks){
    let average = Marks / 3
    return average
}
let m1 = 76
let m2 = 80
let m3 = 95
let sum = (totalMarks(m1,m2,m3))
let average = (avg(sum))

console.log(sum, average)