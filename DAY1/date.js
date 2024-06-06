let now = new Date();
let newYear =  new Date("2025-01-01");

console.log(now);
console.log(newYear);

console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(new Date(now.setHours(10)));

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let dateTotal = date2.getDay() - date1.getDay();

console.log(dateTotal);
