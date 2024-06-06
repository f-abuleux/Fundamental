let data = "Hello Purwadhika"
let dataUpper = data.toUpperCase();
let dataLower = data.toLowerCase();
let dataLower2 = data.toLowerCase().length;
let dataLower3 = data.toLowerCase().replace("0", "A");

console.log(dataUpper);

let i;

for (let i = 0; i < 10; i++) {
    console.log(dataUpper);    
}

console.log(dataLower);
console.log(dataLower2);
console.log(dataLower3);
console.log(data.charAt(3));
console.log(data.search("H"));
console.log(data.replace("a","3"));
console.log(data.replaceAll("a","3"));

const massage = `HELLOW ${data} TESS`;
let massage2 = "Hello World" + data + " Test";

console.log(massage);
console.log(massage2);