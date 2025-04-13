//Q.1 Count Characters

function countCharacters(word){
    let arr = [0,0];
    for(let char of word){
        if(char == 'A'){
            arr[0]++;
        }else if(char == 'D'){
            arr[1]++;
        }
    }
    return arr;
}
let str = 'ABCDABCDAAD';
console.log(countCharacters(str))

//Q.2 Count the Heads

function CountHead(S) {
    let frequency = {};
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    let result = '';
    let sortedKeys = Object.keys(frequency).sort();
    for (let key of sortedKeys) {
        if (frequency[key] > 1) {
            result += key + frequency[key];
        }
    }
    return result;
}
let shbd = "prepbytes";
console.log(CountHead(shbd));


//Q.3 Count the vowels

function countVowels(str){
    let count = 0;
    let vowelsUppercase = ['A','E','I','O','U']
    let vowelsLowercase = ['a','e','i','o','u']

    for(let char of str){
        if(vowelsUppercase.includes(char) || vowelsLowercase.includes(char)){
            count++
        }
    }
    return count;
}

let s = 'prepbytese'
console.log('number of vowels are:', countVowels(s));

//Q.4 Concatenate the Strings

let s1 = 'Big'
let s2 = 'Mountain'
const concatenate = s1 + s2
console.log(concatenate)

//Q.5 Find Length - find without using length method

function findLength(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        count++
    }
    return count;
}
console.log(findLength("hello"));

//Q.6 Find the Winner

function winner(str){
    let countA = 0
    let countD = 0

    for(let i=0; i<str.length; i++){
        if(str[i] == "A"){
            countA++
        }else if(str[i] == 'D'){
            countD++
        }
    }

    if(countA == countD){
        console.log('Draw')
    }else if(countA > countD){
        console.log('Aditya is the winner')
    }else{
        console.log('Danish is the winner')
    }
}

let win = 'AAADDDAD'
winner(win)

//Q.7 Join Strings

function joinStrings(str1, str2){
    let concatenate = str1 + str2
    return concatenate
}
let str1 = "Delhi"
let str2 = "Capitals"
console.log(joinStrings(str1,str2))

//Q.8 Palindrome Check

function palindromeCheck(str){
    let cleanStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    let revStr = cleanStr.split('').reverse().join('');
    return cleanStr === revStr;
}
let x = 'Racecar'
console.log(palindromeCheck(x))

//Q.9 Reverse the String

let names = 'Vanam';
let reversedName = names.split('').reverse().join('')
console.log(reversedName)

//Q.10 Match the String

let word1 = 'hello'
let word2 = 'hello'

if(word1 == word2){
    console.log('yes')
}else{
    console.log('no')
}

//Q.11 String Replace

let para = 'Hi, I am you. You Prepbytes.'
console.log(para.replace('you. You ', ''))

//Q.12 Split the String

let S = "I am utkarsh raj";
let words = S.split(' ');

for (let word of words) {
  console.log(word);
}

//Q.13 Count the Vowels and Consonents

function countConsonents(str){
    let count = 0;
    for(let char of str){
        if(/[a-zA-Z]/.test(char) && !'aeiouAEIOU'.includes(char)){
            count++;
        }
    }
    return count;
}

let word = 'prepbytes';
let vow = countVowels(word)
let cons = countConsonents(word)

console.log(vow,cons)