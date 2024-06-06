console.log(document.title);
document.title = "Programmer Zaman BE:ANDA";
const body = document.body;

const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2');

const defaultText = "Klik saya 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "10px";
btn1.style.fontSize = "24px";
btn1.style.background = "maroon";

console.log(btn1);

function clickButton() {
    btn1.style.background = "navy";
    const newText  = document.createElement("p");
    newText.textContent = "Halo Bung! Apakabar?";
    body.append(newText);
}

function ubahText() {
    btn1.textContent = "XIXIXI";
    const textNama = document.createElement("p");
    textNama.textContent = "Muhammad Farraos Abdillah";
    textNama.style.color = "navy";
    body.append(textNama);
}

function oriText() {
    btn1.textContent = defaultText;
    
}


// console.log(document.body);

// const body = document.body;
// body.append("Hello World");

// const h1 = document.createElement("h1");
// h1.innerHTML = "<marquee>INI H1</marquee>";

// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = "<marquee>Muhammad Farraos Abdillah</marquee>";

// const namaKamu = document.createElement("b");
// namaKamu.innerHTML = "<marquee>Asep dalton</marquee>";

// body.append(h1); 
// body.append(namaSaya);
// body.append(namaKamu);
