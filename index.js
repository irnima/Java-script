// nomre
let nomre = prompt("لطفا نمره ی معدل خود را وارد کنید");
switch (true) {
  case nomre >= 0 && nomre < 15:
    console.log("MRD");
    break;
  case nomre >= 15 && nomre <= 20:
    console.log("GBL");
    break;
  default:
    console.log("WRONG");
    break;
}
