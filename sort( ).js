// sort():- it is the higher order function and it is used to sort the array
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
let numbers=[12,13,14,14,1,2,3,4,5,6,7,8,9,10,11];
// let sorted=numbers.sort(
//     (a,b)=>{
//         if(a<b){
//             return 1;
//         }
//         else {
//             return -1;
//         }
//     }
// )
// console.log(numbers);


let sortage=users.sort(
    (a,b)=>{
        if(a.age>b.age){
            return 1;
        }
        else{
            return -1;
        }
    }
)
console.log(sortage)