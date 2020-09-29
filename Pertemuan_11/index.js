//Deklarasi function lama

// function Test(){
//     return "Function Lama";
// }
// console.log(Test());

//Arrow Function
//1.Parameter
// const Perkalian = (a,b)=>{
//     const total=a*b;
//     return total;
// }
// console.log(Perkalian(9,8));

// //2.Tdk dgn Parameter
// const Mhs = () => {
//     const MhsUnklab = ["Michelle","Gusti","Regina","Reinhard"];
//     return MhsUnklab;
// }
// console.log(Mhs());

// //Implicit Return Value

// const greeting = (nama) => `Hi ${nama}`;

// console.log(greeting('Michelle'));

// EXERCISE


//Convert to ES6 Syntax

const yearUntilRetirement = (year, firstName) => {
    const age = 28;
    const retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstName} retired in ${retirement} years.`);
    }
    else {
        console.log(`${firstName} is already retired.`);
    }
};