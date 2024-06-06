let input = console.log("string");
let inputKonversi = typeof input;


console.log(inputKonversi);


if(inputKonversi === "string"){
    console.log("1");
} else if(inputKonversi === "number") {
    console.log("2");
} else {
    console.log("3");
}