//Q.1 Find the Product

function find_prod(arr){
    let product = 1;
    arr.forEach(element => {
        product *= element
    });
    // console.log(product);
    return product;
}

let array = [5,1,2,3,4,5];
let prod = find_prod(array);
console.log(`Product of the elements of the array is: ${prod}`);

//Q.2 Find the Sum

function find_sum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
}
let sum = find_sum(array);
console.log(`Sum of the elements of the array is: ${sum}`);

//Q.3 Count Occurrences

function countOccurrences(arr, key){
    let count = 0;
    arr.forEach(element => {
        if(element == key){
            count++
        }
    });
    return count;
}
let A = [10,20,30,10,12,13,31,29,10,90];
let K = 10;
console.log(`The total number of occurrences of ${K} in the array is:`, countOccurrences(A,K));

//Q.4 Even Odd

function even_odd_Sum(arr){
    let sumEven = 0;
    let sumOdd = 0;
    arr.forEach(element => {
        if(element % 2 == 0){
            sumEven += element;
        }else{
            sumOdd += element;
        }
    });
    return [sumEven, sumOdd]
}
let arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(even_odd_Sum(arr1));

//Q.5 Find whether the number is present or not

function find_num(arr, num){
    let present = true;
    for(let i of arr){
        if(i == num){
            return true;
        }else{
            present = false;
        }
    }
    return present;
}
let num = 21
console.log(find_num(arr1, num))

//Q.6 Higher Age

function higher_age(arr){
    let higherAge = [];
    arr.forEach(element => {
        if(element >= 18){
            higherAge.push(element);
        }
    })
    return higherAge;
}
let ages = [24,13,12,7,26,32,19,28,18,10];
console.log(higher_age(ages));

//Q.7 Increment the Array Elements

function inc_arr(arr){
    let newArr = [];
    arr.forEach(element => {
        element+=1
        newArr.push(element)
    })
    return newArr
}
console.log(inc_arr(ages));

//Q.8 Pass or Fail

function isAllPass(arr, passMark = 32) {
    return arr.every(marks => marks >= passMark) ? 'yes' : 'no';
}
let marks = [32, 48, 94, 32, 73];
console.log(isAllPass(marks));

//Q.9 Unique Color Shirt

function countUniqueShirts(n, colors) {
    const colorCount = {};
    for (let i = 0; i < n; i++) {
        const color = colors[i];
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }

    let uniqueCount = 0;
    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            uniqueCount++;
        }
    }
    return uniqueCount;
}
const n = 6;
const colors = [3, 2, 4, 1, 2, 3];
console.log(`Total number of unique colors:`,countUniqueShirts(n, colors));

//Q.10 Min and Max

function min_max(arr){
    if(arr.length === 0){
        console.log('Array is empty')
    }else{
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        console.log(`Min is: ${min} and Max is: ${max}`);
    }
}
let nums = [23,4,5,1,8,5,3];
console.log(min_max(nums))