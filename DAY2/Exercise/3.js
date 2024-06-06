// let i = 21;
// let j = i;

// if (i <= 0){
//     console.log(`${i} is not a prime number`);
// } else if (i <= 3) {
//     console.log(`${i} is not a prime number`);
// } else if (i % j === 0 || i % j === 1 || i / 3 === ) {
//     console.log(`${i} is a prime number`);
// } else {
//     console.log(`${i} is not prime numnber`);
// }

let number = 123;
let devider = 0;

for (let i = 1; i <= number; i++) {
    if(number % i == 0){
        console.log(`Pembagi habis ${i}`);
        devider++;
    };
    
}
console.log(`Jumlah bilangan pembagi ${devider}`);
console.log(devider == 2 ? `${number} is a prime number` : `${number} is a not prime number`);