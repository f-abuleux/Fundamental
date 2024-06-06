let i = 1

while (i <= 10){
    console.log(`Hello ${i}`);
    i += 2;
}


// do {
//     console.log(`Hellow Ke-${i}`)
// } while (i <= 10)

// while (true) {
//     console.log(i);

//     if (i == 10) break

//     i++;
// }

for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
    
}

    
    function factorialRecursive(n) {
        if (n === 1) {
            return 1;
        } else {
            return n + factorialRecursive(n-1);
        }
    }

    console.log(factorialRecursive(7));

    