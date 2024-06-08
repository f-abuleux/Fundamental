let arr = ["A", "B", "C", "D", "E"];
let arr2 = new Array("a", "b", "c", "d", "e");

console.log(arr,arr2);
console.log(arr2[2],arr2[1]);
console.log(arr[1],arr[0]);
console.log(arr.length);

arr.push("F"); // TAMBAH DI BELAKANG
console.log(arr);
arr.pop() // HAPUS DI BELAKANG

console.log(arr);

console.log(arr.length);

arr.unshift("X"); // TAMBAH DI DEPAN
console.log(arr);
arr.shift(); // Hapus DIDEPAN

console.log(arr);
console.log(arr.length);

console.log(arr.join("|")); // JADI STRING
console.log(arr.reverse().join(""));

//======================================================================

// JOIN TIDAK BERPENGARUH TERHADAP SEBELUMNYA
// REVERSE, PUSH, POP, UNSHIFT, SHIFT

let num = [134609346, 234525235, 3234234242352525];

num.sort((a, b) => a - b);
console.log(num)

let arrName = ["Asep", "Budi","Burhan","Shopi", "Caca"];
arrName.sort((a, b) => a - b);
console.log(arrName.sort());
console.log(arrName.reverse());

// ======================================================================

let fruits = ["Apple", "Mango", "Jeruke", "Durian"];
let fruits2 = fruits; // TETAP BERPENGARUH WALUPUN YANG DIGANTI FRUITS 1
let fruits3 = [...fruits];

let deletedFruits = fruits.splice(1, 1);
fruits.splice(1, 0, "Kiwi");

console.log(fruits[1]);
console.log(fruits);
console.log(deletedFruits);

console.log(fruits2); // MENGIKUTI TERUPDATE FRUITS OBJECT INSTANCE
console.log(fruits3); // ORIGINAL MENGIKUTI FRUITS DIAWAL

// ======================================================================

const number = [1, 2, 3, 4];
number.push(5);

console.log(number);

const sumNumber = number.reduce((a, b) => a + b, 10);
console.log(sumNumber);

//=======================================================================

number.forEach((value) => {console.log(value)});
number.map((value) => {console.log(value)});
const newNumber = number.map((item) => {return item * 10});

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    
}

const newNumber2 = [];
number.forEach((item) => {
    newNumber2.push(item * 10)
})

console.log(newNumber2);

for (const item of fruits) {
    console.log(item);
}