//Rest & Spread Operator
//-------------------------


// const hitung = (a, b, c, d, e) => {
//     const angka = [a, b, c, d, e];
//     let total = 0;
//     for(let i=0;i<5;i++){
//         total = total + angka[i];
//     }
//     return total
// };

// const hitung = (param1, param2, ...params) => { //Rest Operator (...)
//     console.log(param1);
//     console.log(param2);
//     console.log(params);
//     let total = 0;
//     params.forEach(el => {
//         total = total + el;
//     });
//     return total;
// }

// console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Spread Operator
//1. Duplikasi Array
// const angka = [ 3, 6, 9];
// const angka2 = [...angka];

// angka[0] = 10;
// console.log(angka);
// console.log(angka2);

// console.log(angka);
// console.log(...angka); //... spread operator

//2. Menggabungkan array

// const angka1 = [2, 4, 6];
// const angka2 = [1, 3, 5];
// const angka3 = [10, 11, 12];

// const gabung = angka1.concat(angka2);
// console.log(gabung);

// const gabung1 = [...angka1, ...angka2, 9, ...angka3];
// console.log(gabung1);

//Menambah properti
let orang = {
    nama: "Michelle",
    umur: 20,
};

// orang.pekerjaan = "Mahasiswa";

orang = {...orang, perkerjaan : "mahasiswa", alamat : "Minahasa"};
console.log(orang);

//Menggabungkan Objek
const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d:4};

const objGabung = {...obj1, ...obj2};
console.log(objGabung);
