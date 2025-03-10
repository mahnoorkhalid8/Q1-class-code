"use strict";
// //explicit casting
// let firstName : unknown = "Mahnoor";
// console.log((firstName as string).length);          //7
// console.log((<string>firstName).length);            //7
// console.log((firstName as string).toUpperCase());   //MAHNOOR
Object.defineProperty(exports, "__esModule", { value: true });
// let num1 = 18.1;
// console.log(num1.toFixed(2));           //18.00
// function greet() : string {
//     return "Hello World";
// }
// console.log(greet());              //hellow world
//  function greets() : void {
//     let age = 18;
// }
// console.log(greets());          //undefined
// function greeet() : number {
//     let age = 18 ;
//     return age
// }
// console.log(greeet());             //8
// let friends = ["Mahnoor" , "Nargis" , "Umama"];
// function Join (arr : string[]){
//     console.log(arr.join(","));
// }
// Join(friends);
function Join(...arr) {
    console.log(arr);
}
console.log("Mahnoor", "Nargis", "Umama");
// function login (email : string , password : string): string
// function login (email : string): string 
// function login (email : any , password ?: any) : any{
//     console.log("login")
// }
// login("email" , "password");
// function sum (num1 : string , num2 : string) : void;
// function sum (num1 : number , num2 : number) : void;
// function sum (num1 : string , num2 : number) : void;
// function sum (num1 : any , num2 : any) : any {
//     console.log(num1 + num2);
// }
// sum (20 , 21);
// sum ("20" , "21");
// sum ("20" , 21);
