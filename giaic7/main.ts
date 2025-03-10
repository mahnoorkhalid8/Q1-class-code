// let vegetable = ["onion", "raddish", "potato","green chilli", "red chilli"];
// vegetable.pop();
// console.log (vegetable[3]); // green chilli will print
// vegetable.shift(); 

// let vegetable = ["onion", "raddish", "potato","green chilli", "red chilli"];
// vegetable.pop();
// vegetable.shift();
// vegetable.unshift("Arvi");
// console.log (vegetable[3]); //green chilli will print
         
                 //Arvi                                       shimlaMirch
// let vegetable = ["onion", "raddish", "potato","greenChilli", "redChilli"];
// vegetable.pop();                       //red chilli (removed)
// vegetable.shift();                     //onion(removed)
// vegetable.unshift("Arvi");             // replacement of onion
// vegetable.push("shimlaMirch");        //replacement of red chilli
// vegetable.pop();                       //shimla mirch (removed)
// vegetable.pop();                       //green chilli (removed)
// vegetable.shift();                     //arvi (removed)
//console.log (vegetable[0]);            //raddish will print

// let vegetable = ["onion", "raddish", "potato","greenChilli", "redChilli"];
// let slicedArray = vegetable.slice(0,3);
// console.log(slicedArray[3]); //undefined

let vegetable :string[] = ["onion", "raddish", "potato","greenChilli", "redChilli"];
vegetable.splice(2,2,"Arvi", "shimlaMirch");
console.log(vegetable); 

let fullName :[string , string] = ["Mahnoor" , "Khalid"];
console.log(fullName);

let myName : [string , number ] = ["Mahnoor" , 10];
console.log(myName);



//Activity
//remove first 3 elements
// let fruits : string[] = ["Orange" , "Apple" , "Grapes" , "Peach" , "Mango" , "Banana"];
// fruits.splice(0,3);
// console.log(fruits);

// remove peach
let fruits : string[] = ["Orange" , "Apple" , "Grapes" , "Peach" , "Mango" , "Banana"];
fruits.splice(3,1);
console.log(fruits);

//