// type Fn = () => void
// function greet ( cb : Fn ) {
//     console.log("I'm First");
//     cb();                               //cb function call ho rha
// }
// greet ( () => {                         //this is cb function
//     console.log("Hello");
// });                                     //terminal:
// setTimeout( ()=>{                       //hello
//     console.log("Mahnoor");             //Mahnoor after 3 seconds
// }, 3000);

// console.log("First");                   //first
// setTimeout( ()=>{                       //third
//     console.log("second");              //second after 5 seconds
// }, 5000);
// console.log("Third");

// console.log("First");                   //first
// setTimeout( ()=>{                       //third
//     console.log("second");              //second after zero seconds
// });
// console.log("Third");

// //callback
// function checkMarks (marks : number , celebratecb : any){
//     setTimeout(()=>{
//         if(marks >= 90){
//             celebratecb();
//         }
//     } , 3000);
//     console.log("Functio End");     //no need for this console, but we are using this to understand that how much time will congrats take to print
// };
// function celebrate(){
//     console.log("Congratzz");
// };
// checkMarks(98 , celebrate);

//promises
// function checkMarksProm( marks : number){
//     return new Promise ((pass , fail) =>{
//         setTimeout(() =>{
//             if( marks > 90){
//                 pass("Congratz");
//             }
//             else{
//                 fail();
//             }
//         } , 3000);
//     });
// };
// checkMarksProm(89)
// .then(  () => console.log("Congratz!!"))
// .catch(() => console.log("Nalaik"));

//await
function checkMarksProm( marks : number){
    return new Promise ((pass , fail) =>{
        setTimeout(() =>{
            if( marks > 90){
                pass("Congratz");
            }
            else{
                fail("Nalaik");
            }
        } , 3000);
    });
};
try{
    let res = await checkMarksProm(87);
}catch(err){
    console.log(err)
}


