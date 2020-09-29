//Arrow Function

//Single Argument
// const calcAge = year => {
//     return 2020 - year;
// };

// console.log(calcAge(2000));

//Multiple Argument
// const calcAge = (birthYear, currentYear) => {
// const x;
//     return currentYear - birthYear;
// };

// console.log(calcAge(2000, 2020));

//No Argument with return value
// const calcAge = () => 2020 -2000;
// console.log(calcAge());

// const years = [1990, 1992, 2001, 2005];

// const calcAge5 = years.map(function(el){
//     return 2020 - el;
// });

// Menggunakan Arrow Function
// const calcAge6 = years.map((el) => 2020 - el);
// console.log(calcAge6);

//DEFAULT PARAMETER

const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;

console.log(calcAge(2000, 2021))