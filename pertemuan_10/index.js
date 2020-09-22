//Var, Let, Const

// let nama = "michelle";
// let nama = "walangitan";

// console.log(nama);

//Scope dalam javascript
//1. Function scope (var)
//2. Block scope

// (function test(){
//     for (var i=0; 1<10; i++){
//         console.log(i);
//     }
// })();

// console.log(i);

// {
//     let i;
//     for (let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }
// console.log(i);


//Template Literal

const person = {
    firstName: "Michelle",
    lastName: "Walangitan",
    age: 20,
};

console.log("Halo nama saya " 
+ person.firstName 
+ " " + person.lastName 
+ ". Umur saya adalah " 
+ person.age + "tahun.");

console.log(`Halo nama saya ${person.firstName} ${person.lastName}`);