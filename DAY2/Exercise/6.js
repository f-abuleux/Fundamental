let bilangan1 = 0;
let bilangan2 = 1;
let n = 1 ;

for (let i = 1; i < n; i++) {
    let nextNum = bilangan1 + bilangan2;
    bilangan1 = bilangan2;
    bilangan2 = nextNum + bilangan1;
}
console.log(`${bilangan2} Bilangan 2`);
// console.log(`${bilangan1} Bilangan 1`);

