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

// class Cat extends Animal {
//     makeSound(){
//         console.log("Meow Meow");
//     }
// }
// let c1 = new Cat("Tun Tun");
// console.log(c1.name);
// c1.makeSound();

// //Encapsulation

// class Person {
//     name : string;
//     protected age : number;
//     constructor (name: string , age : number){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Teacher extends Person{
//     getAge(){
//         this.age
//         //console.log("Age is private");            age bhi print ho rhi hy or ye console bhi
//     }
// }
// let t1 = new Teacher("Hamzah" , 23);
// console.log(t1);
// t1.getAge();

//abstraction
interface Shape {
    draw(): void;
}
class Circle implements Shape {
    draw() : void {
        console.log("Drawing a circle")
    }
}
let circle1 = new Circle();
circle1.draw();

class Square implements Shape {
    draw() : void {
        console.log("Drawing a Square");
    }
}
let s1 = new Square();
s1.draw();












