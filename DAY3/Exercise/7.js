let str = "The QuiCK BroWn FoX";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i).toUpperCase()){
        result += str.charAt(i).toLowerCase();
    } else {
        result += str.charAt(i).toUpperCase();
    }    
}
console.log(result);