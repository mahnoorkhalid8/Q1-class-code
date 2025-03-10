// console.log("Hello World");
// let index: number = 10;
// ++index;
// console.log(index);
// let index: number = 10;
// ++index; //index = 11
// --index; //index = 10
// ++index; //index = 11
// --index; //index = 10
// --index; //index = 9
// console.log(index); //??
// let index = 10;
// //            11     +   12    + 7 +   12  - 5
// let result = ++index + ++index + 7 + index - 5;
// console.log(result);
// let firstName = "Mahnoor";
// let age = 23;
// let message = `Hello my name is ${firstName} and my age is ${age}`;
// console.log (message);
// let num1 = 2;
// num1 += 5;
// console.log (num1);
// let num1 = 2;
// num1 -= 5;
// console.log (num1);
// let num1 = 55;
// let num2 = 55;
// console.log(num1 == num2);
// let num1 = 55;
// let num2 = 58;
// console.log(num1 != num2);
// let num1 = 55;
// let num2 = 58;
// console.log(num1 > num2);
// let num1 = 55;
// let num2 = 58;
// console.log(num1 < num2);
// let age = 20;
// console.log(age>=20);
// let age = 20;
// console.log(age<=20);

//homework (slide 121);
let a: number = 5;
let b: number = 2;
let c: number;
c = ++a + a++ + --b + b-- + a + b++ + b;
// = 6  +  7  +  1  +  0  + 7 + 1   + 1 = 23; why 22?
console.log(c);

//homework 2 (slide 131) BMI calculator;
let weightInKg = 47;
let heightInMeters = 1.65;
let bmi = weightInKg / (heightInMeters * heightInMeters);
 // bmi =     47     /      1.65       *     1.65 = 17.26
console.log(`Your BMI is ${bmi}`);