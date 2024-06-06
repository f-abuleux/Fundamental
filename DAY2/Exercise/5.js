let n = 11;
let sum = 1;

for (let i = n; i >= 1; i--) {
    console.log(sum);
    sum *= i ;
}
console.log(`${sum} TEST`)