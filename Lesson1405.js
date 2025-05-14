'use strict'

let greet = (name)=> "hello " + name

console.log(greet("Liran"));

// const formatName = function (firstName, lastName) {
//   return (
//     lastName.toUpperCase() +
//     ', ' +
//     firstName[0].toUpperCase() +
//     firstName.slice(1)
//   );
// };



let formatname= (firstname,lastname)=> {return (
  lastname.toUpperCase() +
  ', ' +
  firstname[0].toUpperCase() +
  firstname.slice(1)
);}

console.log(formatname("Liran","edelshten"))

let fufu2=()=> console.log("!!!");

fufu2();


// let result=filter([1,2,3,4,5],(elem)=>elem>0)
// console.log(result)


    const numbers=[1,2,3,4,5,6];
let doublenumbers=numbers.map((elem)=>elem*2)
console.log(doublenumbers)

const age=[18,21,16,30,25,13]

let adults=age.filter((age)=>age>=18)
console.log(adults)


const fruits = ['apple', 'banana', 'cherry'];

let frutes=fruits.forEach((elem)=>console.log(elem))

const greetings = ['hello', 'world', 'javascript']; // ->['HELLO', 'WORLD', 'JAVASCRIPT']

let greetUpper=greetings.map((elem)=>elem.toUpperCase())
console.log(greetUpper)
