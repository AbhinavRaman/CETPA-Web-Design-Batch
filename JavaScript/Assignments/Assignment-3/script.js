//Q.1
let n = 5;
for(let i=0; i<n; i++){
    let row = "* "
    for(let j=1; j<=i; j++){
        row += '* '
    }
    console.log(row)
}


//Q.2
let three = 'Fizz'
let five = 'Buzz'
for(let i=1; i<=45; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log(`${i} is divisible by both 3 and 5:`, three + five)
    }else if(i % 5 == 0){
        console.log(`${i} is divisible by 5:`, five)
    }else if(i % 3 == 0){
        console.log(`${i} is divisible by 3`,three)
    }
}
console.log('Remaining numbers between 1 and 45 are not divisible by 3 & 5.')


//Q.3
function arrSum(array){
    let sum = 0
    for(i of array){
    sum += i
    }
    return sum;
}
var arr = [1,13,22,143,49]
console.log("Total sum of the array is:", arrSum(arr))


//Q.4
var arr1 = [3,5,22,5,7,2,45,75,89,21,2]
let sumArr1 = arrSum(arr1)
var arr2 = [9,2,42,55,71,22,4,5,90,25,26]
let sumArr2 = arrSum(arr2)
console.log(`Total sum of arr1 (${sumArr1}) and arr2 (${sumArr2}) is:`, sumArr1 + sumArr2)



//Q.5
let arrr = [43,'what',9,true,'cannot',false,'be',3,true]
arrr.reverse();
console.log(arrr)