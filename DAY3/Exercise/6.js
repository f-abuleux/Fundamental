// let word = "hello purwadhika bandung";
// console.log(word)
// let capitalizeWord = word.split(" ");
// console.log(capitalizeWord)


// for (let i = 0; i < capitalizeWord.length; i++) {
//     capitalizeWord[i] = capitalizeWord[i][0].toUpperCase() + capitalizeWord[i].substr(1);
// }
// console.log(capitalizeWord.join(" "));

// ==================================================================

let str = "hallo purwadhika bandung";
let isCapital = true;
let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (isCapital == true) {
//         result += str.charAt(i).toUpperCase();
//         isCapital = false;
//     } else {
//         result += str.charAt(i).toLowerCase();
//     }


//     if (str.charAt(i) == " "){
//         isCapital == true;
//     }

// }

//===================================================================

for (let i = 0; i < str.length; i++) {
    if(i == 0 || str.charAt(i - 1) == " "){
        result += str.charAt(i).toUpperCase();
    } else
        result += str.charAt(i).toLowerCase();
    
}
console.log(result);