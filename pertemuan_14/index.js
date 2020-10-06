// //1. Destrukturisasi Array

// let buah = ["Semangka", "Apel", "anggur"];
// let [buah1, buah2, buah3] = buah;   //destrukturisasi array

// console.log(buah1);
// console.log(buah2);
// console.log(buah3);

// //gunakan koma kosong utk melewati element
// let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

// console.log(namaDepan); 
// console.log(namaBelakang);
// console.log(buku); 

// //Menukar nilai
// let a = 5;
// let b = 9;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

//2.Destrukturisasi Objek

let orang = {
    name: "Michelle",
    age: 20,
  };
let { name: nama, age: umur } = orang;

console.log(nama);
console.log(umur);

//3.Destrukturisasi Objek Bertingkat

let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
let {
    prestasi: { akademik }
} = murid;
  
console.log(akademik);
