let word = "kasur rusak";
let reverseWord = ""

for (let i = word.length; i > 0 ; i--) {
    console.log(i);    
    reverseWord += word.charAt(i - 1) ;
    console.log(word.charAt(i - 1));
}

console.log(word, reverseWord);
// let wordArr = [word].reverse().join(" ");
// console.log(wordArr);
// let wordArrtostr = wordArr.toString();
// console.log(wordArrtostr);
// let palindrom  = word.re

console.log(word === reverseWord ? "Palindrom" : "Tidak palindrome");

