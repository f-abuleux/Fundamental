
// let date1 = new Date("2022-01-20");
// let date2 = new Date("2022-02-22");
// let selisih = Math.floor(date2 - date1) / (24 * 3600 * 1000);

// console.log(`${selisih} days`);

// // console.log(now.getTime());

// let dateTotalAkhir = Math.floor((date2 - date1) / (24 * 3600 * 1000));

// console.log(dateTotalAkhir); 


// let date3 = 500; 
// let year = Math.floor(date3 / 365);
// console.log(year);
// let month = Math.floor((date3 % 365) / 30) ;
// console.log(month);
// let days = (date3 % 365) % 30;

// console.log(`${year} year, ${month} month, ${days} days`);
// console.log(date3 % 365);

let date1 = new Date("2022-08-22");
let date2 = new Date("2022-09-22");
let selisih = (date2 - date1) / (24 * 60 * 60 * 1000); // days
let selisih2 = (date2 - date1) / (24 * 60 * 1000) // minute
let selisih3 = (date2 - date1) / (24 * 1000) // detik
let selisih4 = (date2 - date1) / (24) // milidetik
let selisih5 = (date2 - date1) // nanodetik

console.log(`Selisihnya adalah ${selisih} days`);
console.log(`Selisihnya adalah ${selisih2} minutes`);
console.log(`Selisihnya adalah ${selisih3} detik`);
console.log(`Selisihnya adalah ${selisih4} milidetik`);
// console.log(`Selisihnya adalah ${selisih5} nanodetik`);


console.log(date1.getTime());
console.log(date1.getDate());

