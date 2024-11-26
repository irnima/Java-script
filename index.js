// Prompt
let cellphone = prompt("لطفا شماره تلفن خود را وارد کنید");
let phone = cellphone.slice(4, 7);
let q = cellphone.replace(phone, "****");
console.log(q);
