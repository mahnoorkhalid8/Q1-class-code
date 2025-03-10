"use strict";
// class Person{
//     name : string;
//     age : number;
//     constructor(name : string , age : number){
//         this.name = name;
//         this.age = age;
//     }
// }
// let p1 = new Person("Mahnoor" , 18);
// let p2 = new Person("Maryam" , 20);
// console.log(p1);
// console.log(p2);
// class Student{
//     name : string;
//     rollNumber : number;
//     section : string;
//     constructor(name : string , rollNumber : number , section : string){
//         this.name = name;
//         this.rollNumber = rollNumber;
//         this.section = section;
//     }
// }
// let s1 = new Student("Mahnoor" , 8 , "A");
// let s2 = new Student("Nargis" , 30 , "B");
// let s3 = new Student("Umama" , 18 , "C");
// console.log(s1);
// console.log(s2);
// console.log(s3);
class Person {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    walk() {
        console.log(this.name, "Walking...");
    }
}
let p1 = new Person("Mahnoor", 18, 1000000);
let p2 = new Person("Maryam", 20, 2000000);
console.log(p1);
console.log(p2);
p1.walk();
p2.walk();
class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("Walking...");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    woof() {
        console.log("Woof Woof!");
    }
}
let dog1 = new Dog("Tommy");
console.log(dog1.name);
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    meaow() {
        console.log("Meaow Meaow!");
    }
}
let cat1 = new Cat("Kitty");
cat1.meaow();
