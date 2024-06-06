let str = "1231231234";
let count = 0;
let nomer = ""

for (let i = 0; i < str.length; i++){
    nomer += str.charAt(i - 1);
    nomer++;
    if(i == 0){
        nomer = "(" + nomer.toString();
    }
    if(i == 2){
        nomer =`${nomer}`
    }
    
    console.log(nomer);

}
console.log(nomer);

let num = "5554441234";
let phone = "(***) ***-****";

for (let i = 0; i < num.length; i++) {
    phone = phone.replace("*", num.charAt(i));
    
}
console.log(`phone number is ${phone}`);