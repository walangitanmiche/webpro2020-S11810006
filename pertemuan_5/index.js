// Array

let angka=[1,2,3,4,5,7,8];
let buah=["Mangga", "Apel", "Jeruk" ];

console.log(buah)
console.log(angka) 

let arr = ["text",1,true];
console.log(arr);

let myfunc = function () {
    return "Hello Array";
};

let arr2 = ["text", 1 , true, myfunc(),[1,2,3,4,5]]

console.log(arr2)

console.log(arr2[4])
console.log(arr2[3])
console.log(arr2[2]) 
console.log(arr2[1])
console.log(arr2[0])

console.log(typeof arr2);
console.log(arr2.length);

// Deklarasi Array menggunakan kata kunci new 
//let buah2 = new Array ("Mangga", "Apel", "Jeruk" );
//console.log(buah2)

//Manipulasi Array
// Menambah isi Array

/*let mhs= [];
mhs[0]="Michelle";
mhs[1]="Rein";
mhs[2]="Gusti";
mhs[3]="Regina";
console.log(mhs)
// Mengubah Isi Array
mhs[2]="Acxel";
console.log(mhs)
//Menghapus
mhs[2]=undefined;
console.log(mhs)
// Menampilkan isi Array
let mhs1= ["Michelle","Rein","Gusti","Regina"];
for (let i=0 ; i < 4 ; i++){
 console.log("Mahasiswa ke-" + (i + 1) + "Adalah" + mhs1[i])
}*/


// Method dalam Array 
    //tostring
let mhs1= ["Michelle","Rein","Gusti","Regina"];
//console.log(mhs1.toString())

    //join
//console.log(mhs1.join("-"))

    //push,pop,unsgift,shift
/*mhs1.push("BOOM");
console.log(mhs1.join("-"))
mhs1.pop("");
console.log(mhs1.join("-"))
*/
/*
mhs1.unshift("BOOM")
console.log(mhs1.join("-"))
mhs1.shift()
console.log(mhs1.join("-"))
//concat
let buah1=["Mangga","Jeruk","Apel","Banana"];
let sayur=["Tomat","Ketimun","Cabe"]
let rujak = buah1.concat(sayur);
console.log(rujak)
*/
// Splice & Slice

//Spilce
let buah1=["Mangga","Jeruk","Apel","Banana"];

buah1.splice(1,0,"Melon","Kalapa");
console.log(buah1.join("-"));

//slice

let buah3= buah1.slice(0,2);
console.log(buah3.join("-"))

//forEach dan Map

//forEach
    let nomor=[1,2,3,4,5,6,7,8];

    nomor.forEach (function (el){
        console.log(el);
    }   )

// Map
   let nomor2 = nomor.map(function(el){
        console.log(el)
        return el;
    });

//Sort

let nums = [1,200,32,43,54]
let name = ["Regina","Gusti","Reinhard","Axcel"]

nums.sort(function(a,b){
    return b-a;
})
console.log(nums)

name.sort()
console.log(name)

//filter

let number = [1,200,32,43,54]

let number2 =number.filter(function(el){
    return el > 100;
})
console.log(number2)