let user = [
  {
    id: 1,
    fname: "Amir hamze",
    lastname: "tahmasbi",
    age: 18,
    gender: "M",
  },
  {
    id: 2,
    fname: "nima",
    lastname: "shah baba",
    age: 22,
    gender: "M",
  },
  {
    id: 3,
    fname: "zahra",
    lastname: "tajik",
    age: 19,
    gender: "F",
  },
  {
    id: 4,
    fname: "Razieh",
    lastname: "sabekiyan",
    age: 44,
    gender: "F",
  },
];

let q = user.filter((user) => user.age > 20);
console.log(q);
