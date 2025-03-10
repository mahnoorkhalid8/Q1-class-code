//union literals
let age : string | number
age = 19;
age = "19";
age = "true";
age = `true`;
age = `true ${99+1}`;           //true 100 wil print
console.log(age);           

//narrowing from union literals
let ages :string | number
ages = 18;
console.log(ages.toFixed(2));       //18.00 will print (2 digit after decimal)

ages = "18";
console.log(ages.toUpperCase());        

//turnary operator
let names = Math.random() > 0.6 ? "Mahnoor" : 18;
console.log(names);

//narrowing from turnary operator
let myName = Math.random() > 0.6 ? "Mahnoor" : 18;
if (typeof myName === "number"){
    console.log(myName.toFixed(2));
}
else{
    console.log(myName.toUpperCase());
}

//null from type alias
type userprofile ={
    firstname : string,
    middlename : string | null,
    lastname : string,
};
let user : userprofile = {
    firstname : "Mahnoor",
    middlename : null,
    lastname : "Khalid",
};
console.log(user);

//structural typing (interface)
interface IDeal1 {
    food : string;
}
interface IDeal2 {
    food : string;
    drink : string; 
}
let maryamOrder : IDeal1 = {
    food : "Biryani"
}
let mahnoorOrder : IDeal2 = {
    food : "Biryani",
    drink : "sting"
}
maryamOrder = mahnoorOrder         //stale object can pass extra property
mahnoorOrder = maryamOrder      //error

maryamOrder = {                 //fresh obeject cannot pass extra property
    food : "Biryani",
    drink : "sting"
};

