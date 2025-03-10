"use strict";
// //polymorphism
// class Animal {
//     name : string;
//     constructor (name : string){
//         this.name = name
//     }
//     makeSound(){
//         console.log("General sound!");
//     }
// }
// // let a1 = new Animal ("Tommy");           //object banaya hy variable k through
// // a1.makeSound();
// class Dog extends Animal {
//     makeSound(){
//         console.log("Woof");
//     }
// }
// let d1 = new Dog("Tommy");
// console.log(d1.name);
// d1.makeSound();
class Circle {
    draw() {
        console.log("Drawing a circle");
    }
}
let circle1 = new Circle();
circle1.draw();
class Square {
    draw() {
        console.log("Drawing a Square");
    }
}
let s1 = new Square();
console.log(s1);
