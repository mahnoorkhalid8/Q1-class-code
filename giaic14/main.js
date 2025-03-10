"use strict";
//Question 1: [Write a function `checkEvenOdd` that accepts a nuber and prints whether it is even or odd].
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("It is even number");
    }
    else {
        console.log("It is odd number");
    }
}
checkEvenOdd(30);
//Question 2: [ Write a function "arrayOperations" that creates an array of number, add a number to the end of the array,
//removes the first number, removes the middle number and add a new number and print the modofied number array]
let digits = [1, 2, 3, 4, 5];
function arrayOperations(num) {
    digits.push(4);
    digits.shift();
    digits.splice(2, 1, 10);
}
;
console.log(arrayOperations(digits));
//Question 3: [Write a function multiplies the element of arrays by 2 and returns the modified array].
// let multiples : number[] = [2 , 3 , 5 , 6 , 9]; 
// function multiplies(arr : number[]): number[]{
//     for(let i = 0 ; i < arr.length ; i ++){
//     //console.log(multiples[i]*2);              //ans array main nahi arha aisy
//     arr[i] = arr[i]*2                           //ans array main arha aisy
//     }
//     return arr;
// }
// console.log(multiplies(multiples));
//Question 4: [Write a function findLargest that accepts an array of numbers and returns the largest number].
let array = [1, 4, 6, 2];
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest(array));
