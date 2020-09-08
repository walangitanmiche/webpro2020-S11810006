//const Mhs1 = ["Michelle", "Walangitan", 20];

//Object Literal
// const mhs1 = {
//     namaDepan: "John",
//     namaBelakang: "Doe",
//     umur: 20,
//     sudahLulus: true,
//     alamat: {
//         jalan: "JL. Arnold Mononutu",
//         kecamatan: "Airmadidi",
//         kabupaten: "Minahasa Utara",
//     },
//     IPsemester: [3.05,3.25, 3.0, 3.4],
//     hitungIPK: function(){
//         let total = 0;
//         this.IPsemester.forEach(function(el) {
//             total = total+ el;
//         });
//         this.IPKumulatif = total/4;
//     }
// };

// delete mhs1.namaBelakang;
// console.log(mhs1);


// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPsemester[2]);
// mhs1.hitungIPK();
// console.log(mhs1);

//Mengakses properti dari objek
//1.dot notation
//console.log(mhs1.umur);
//2.bracket rotation
//console.log(mhs1["namaBelakang"]);

//Array Object

const mhs = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Janice",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan: "Adam",
        namaBelakang: "Stanley",
    },
];

mhs.forEach(function(el){
    console.log(el);
});