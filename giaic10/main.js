//union literals
var age;
age = 19;
age = "19";
age = "true";
age = "true";
age = "true ".concat(99 + 1); //true 100 wil print
console.log(age);
//narrowing from union literals
var ages;
ages = 18;
console.log(ages.toFixed(2)); //18.00 will print (2 digit after decimal)
ages = "18";
console.log(ages.toUpperCase());
//turnary operator
var names = Math.random() > 0.6 ? "Mahnoor" : 18;
console.log(names);
//narrowing from turnary operator
var myName = Math.random() > 0.6 ? "Mahnoor" : 18;
if (typeof myName === "number") {
    console.log(myName.toFixed(2));
}
else {
    console.log(myName.toUpperCase());
}
var user = {
    firstname: "Mahnoor",
    middlename: null,
    lastname: "Khalid",
};
console.log(user);
