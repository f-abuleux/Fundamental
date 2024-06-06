// let grade = "A";

// switch (grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good Job");
//         break;
//     case "C":
//         console.log("Nice Try");
//         break;
//     default:
//         console.log("Ngulang Ieu Mah");
// }

let x = 10;
let y = 1;
let z = 5;

if (x == 10 || y == 10){
    console.log("YEP")
} else {
    console.log("NOPE")
}

console.log(x == 10 && y == 10 ? "YEP" : "NOPE");
console.log((x == 10 && y == 1) ? "YEP" : "NOPE");


if (x == 10 && y == 10){
    console.log("YEP")
} else {
    console.log("NOPE")
}


if (!(x == 10 && y == 10)){
    console.log("YEP")
} else {
    console.log("NOPE")
}

// TENARY OPERATOR => SINGKAT UNTUK IF (JIKA SIMPEL)

const str = "JavaScript";

console.log(str === "JavaScript" ? "YAK BENAR" : "TENTU TIDAK BENAR");