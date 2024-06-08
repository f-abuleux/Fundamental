let num1 = 20;
let num2 = 40;

console.log(penjumlahan(5, 76)); // DECLERATION BISA DIAKSES WALAUPUN DIATASNYA
// console.log(square(10)); // EXPRESSION TIDAK BISA DI ATAS


function penjumlahan(a, b) { //DECLERATION
return a + b ; 
}

console.log(penjumlahan(5, 6));
console.log(penjumlahan(num1, num2));

const square = function(a){ //EXPRESSION
    return a * a; 

}

function pengurangan(a, b = 10) {
    return a - b ; 
}
console.log(pengurangan(5, ));

function oddEven(number) {
    // if(number % 2 == 0){
    //     return "even";
    // } else {
    //     return "odd";
    // }
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(oddEven(10));

function getMassage(firstName) { // NESTED FUNCTION
    function sayHello() {
        return "Hello " + firstName + ". ";
    }
    function welcomePurwadhika() {
        return "Welcome to Purwadhika";
    }    
    return sayHello() + welcomePurwadhika();
}
console.log(getMassage("Farraos"));

function greeting(name) { //CLOUSURE
    const defaultMassage = "Hello ";

    return function () { //ANNOUNYMOUS FUNCTION
        return defaultMassage + name;
    }
}

const greetingDavid = greeting("David");
console.log(greetingDavid());

const greetingDavid2 = greeting("David")();
console.log(greetingDavid2);

function multiplier(factor) { //CURRYING
    return function (number) {
        return factor * number;
    }
}
const mult3 = multiplier(3);
const mult4 = multiplier(4);

console.log(mult3(4));
console.log(mult4(5));

function countDown(fromNumber) { // RECURSIVE (MEMANGGIL DIRINYA SENDIRI)
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0){
        countDown(nextNumber)
    }
}

countDown(6);

function factorialRecursive(value) { // RECURSIVE
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value-1);
    }
}

console.log(factorialRecursive(5));

function sum(a, b) {
    return a + b;
}

const summary = (a = 10, b = 10) => a + b;
console.log(summary(6));