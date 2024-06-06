let jumlah = 10000000000;
let formatUang = new Intl.NumberFormat('idr',
    {
        style: "currency",
        currency: "IDR"
    }
)

console.log(`Jumlahnya ${jumlah} dan hasilnya ${formatUang.format(jumlah)}`);
console.log(`Jumlahnya ${jumlah} dan hasilnya ${formatUang.format(jumlah).replace("Rp", "Rp.")}`);


let number = 12312434;
let strNumber = number.toString();
// console.log(strNumber);
let count = 0;
let rupiah = "";

for (let i = strNumber.length; i > 0; i--) {
    // console.log(strNumber);
    rupiah = strNumber.charAt(i - 1) + rupiah;
    // console.log(rupiah);
    count++;
    if(count % 3 === 0 && strNumber.length != count)
        rupiah = "." + rupiah;
    console.log(rupiah);
}
console.log(`Rp. ${rupiah},00`)
