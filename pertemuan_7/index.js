//CONDITIONAL
//1.Menggunakan if, else if & else
// let nilaiAndi = 80;

// if (nilaiAndi > 80){
//     console.log("Sangat Memuaskan");
// }
// else if (nilaiAndi >=  60 && nilaiAndi <=80){
//     console.log("Memuaskan");
// }
// else {
//     console.log("Jangan Menyerah, Coba Lagi!");
//}

//2. switch & case (banyak kondisi)
// let seragamSekolah;
// let hari = "sabtu";

// switch (hari) {
//   case "senin":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "selasa":
//     seragamSekolah = "kemeja hijau bawahan hitam";
//     break;
//   case "rabu":
//     seragamSekolah = "kemeja putih bawahan putih";
//     break;
//   case "kamis":
//     seragamSekolah = "kemeja batik merah bawahan hitam";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }

// console.log(seragamSekolah);


//LOOP
// 1.For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
 

// 2.For/In Loop
// const buku = {
//     judul: "Harry Potter and The Philosopher's Stone",
//     pengarang: "J. K. Rowling",
//     tahun: 1997
//  };
//  for (x in buku) {
//    console.log(x, ':', buku[x]);
//  }
 

//3.For/Of Loop
// const buku = ["Game of Thrones: A Song of Ice and Fire",  
//    "Harry Potter and The Philosopher's Stone", 
//    "Lord of The Rings: The Fellowship of The Ring"
// ];
// for (x of buku) {
//     console.log(x);
//   }
  
//4.Whilr Loop
// let x = 1;

// while (x <= 10) {
//   console.log(x);
//   x++;
// }

//5.Do While Loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);