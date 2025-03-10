type User = {
    name : string,
    age : number,
    role : String,
    children :{
        name : string,
        age : number,
        role : String
    }
};
let user1 : User = {
    name : "Khalid",
    age : 62,
    role : "father",
    children : {
        name : "Mahnoor",
        age : 22,
        role : "daughter"
    }
};
console.log(`${user1.name} 
${user1.children.name}`);

let trafficLight : "red" | "yellow" | "green" = "green";
console.log(trafficLight); 
let drinks : "tea" | "cold drink" = "cold drink";
console.log(drinks); 

type Student = {
    name : string;
    rollNumber : number;
};
type Teacher = {
    name : string;
    salary : number;
};
let student1 : Student = {
    name : "Mahnoor",
    rollNumber : 1234
};
let teacher1 : Teacher = {
    name : "Khalid",
    salary : 100000
};
let both : Student & Teacher = {
    name : "Mahnoor",
    rollNumber : 1234,
    salary : 100000
};
console.log(both.name);