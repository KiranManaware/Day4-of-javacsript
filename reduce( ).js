// reduce():- it is the higher order function and it is used to perform arithmetic operations
const users = [
    {
      id: 1,
      name: "Tony Stark",
      gender: "Male",
      age: 50,
      isAvenger: true,
      tags: ["Human", "Inteliigent"],
    },
    {
      id: 2,
      name: "Steve Rogers",
      gender: "Male",
      age: 110,
      isAvenger: true,
      tags: ["SuperHuman", "Inteliigent"],
    },
    {
      id: 3,
      name: "Natasha Romonova",
      gender: "Female",
      age: 32,
      isAvenger: true,
      tags: ["Human", "Spy"],
    },
    {
      id: 4,
      name: "Peter Parker",
      gender: "Male",
      age: 24,
      isAvenger: false,
      tags: ["SuperHuman", "Super Strength"],
    },
    {
      id: 5,
      name: "Steven Stranger",
      gender: "Male",
      age: 40,
      isAvenger: false,
      tags: ["Doctor", "Magic"],
    },
    {
      id: 6,
      name: "Thor Odinson",
      gender: "Male",
      age: 1500,
      isAvenger: true,
      tags: ["Demigod", "Mjonir"],
    },
    {
      id: 7,
      name: "Captain Marvel",
      gender: "Female",
      age: 140,
      isAvenger: true,
      tags: ["Super Strength", "Flight"],
    },
];
// console.log(users)
// let numbers=[12,13,14,14,1,2,3,4,5,6,7,8,9,10,11];
// let total=numbers.reduce(
//     (a,i)=>{
//         return a+i;
//     },0
// )
// console.log(total)


// let sum=0;
// for(let i=0;i<numbers.length;i++){
//   sum+=numbers[i];
//   // console.log(sum);
// }
// console.log(sum);




let total=users.reduce(
    (a,i)=>{
       return a+i.age
    },0
);

console.log(total)