// QUESTION 1

// 1. Variable
// Variables are place holders. They are like a plastci bag but you have to put items inside that the plastic bag will hold.
// 2. Value
// This refers to the data stored within a variable.
// 3. Data type
// Data types describe the different types or kinds of data that we work with and store in variables.
// 4. Initialization
// When we store a value in a variable
// 5. Tell me the difference between let, var, and const.
// const creates variables which can not be reassignedd and are a definite variable, let has values which can be reassigned and var
// 6. What is a variable scope?
// scope of a variable is its lifetime in the program
// 7. When can you decide when to use a for or while, forEach and do while loop?
// It depends on the task at hand. All the functions differ
// 8. Define hoisting and variable scoping
// Hoisting is the process of moving function declarations to the top of the file.
// scope of a variable is its lifetime in the program

// function fullName() {
//     let firstName = "Kgodisho"
//     let lastName = "Lebopa"
//     let fullName = `Hi my fullname is ${firstName}${lastName}`

//     console.log(fullName)
//   }

//   fullName()
//______________________________________________________________________________

//   QUESTION 2

// let myname = 'Kgodisho'
// let surname = 'Lebopa'
// let age = 24
// subjects = ['CSS','HTML','BOOTSTRAP','javascript']
// let address = {
//      strname : 'Lower Church street' ,
//      strno : 1 ,
//      suburb : 'Wynberg ',
//      city : 'Cape Town' ,
//     country : 'South Africa'

// }

// console.log(myname);
// console.log(surname);
// console.log(age);
// console.log(subjects);
// console.log(address);

//________________________________________________________________________________
// QUESTION 3

// function calcResult() {
//   let num1 = parseFloat (document.querySelector("#num1").value);
//   let op = document.querySelector("#op").value;
//   let num2 = parseFloat (document.querySelector("#num2").value);
//   let lblResult = document.querySelector("#lblResult");

//   if (op == "+") {
//     lblResult.textContent = num1 + num2;
//   } else if (op == "-") {
//     lblResult.textContent = num1 - num2;
//   } else if (op == "*") {
//     lblResult.textContent = num1 * num2;
//   } else if (op == "/") {
//     lblResult.textContent = num1 / num2;
//   } else {
//      lblResult.textContent = "error";
//  }
//  console.log(lblResult);

// }

//____________________________________________________________________
//QUESTION 4


// function reverse(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// }
// console.log(reverse("programming"));

// one other way to do it is like this
// let subject = 'programming'
// console.log(subject);
// console.log(subject.split('').reverse().join('')); //only arrays can show stuff in reverse
// split allows to take a string and convert it to an Array
// use the join term to combine the arrays into a string or else there will be space in between
// console.dir (new String()) //this is done so that the console can give different ways you can what what


//_____________________________________________________________________________

//QUESTION 5

// let peopleNames = [
//   {
//     name: "Kgodisho",
//     dob: '2020-03-25'
    
//   },
//   {
//     name: "Deline",
//     dob: '1999-12-17'
//   },
//   {
//     name: "Maila",
//     dob: '2007-07-15'
//   }
  
// ]

// //Display Name
// let people = peopleNames.find(peopleNames => peopleNames.name === "Kgodisho")
// console.log(people);

// //getAge
// let dob = new Date(people.dob);
// let today = new Date();
// let age = today.getFullYear() - dob.getFullYear();
// console.log("Kgodisho is " + age + " years old");

// // calculate how many days until next birthday

// dob.setFullYear(today.getFullYear())
// if (today > dob) {
//   dob.setFullYear(today.getFullYear() +1 );
// }

// let nextBday = Math.floor((today - dob) / (1000 * 60 *60 * 24));
// console.log("Kgodisho's birthday is coming up in " + nextBday +" days" );

//______________________switch statements_______________________________


// let marks = 85;

// switch (true) {
//   case marks === 100:
//     console.log("You're amazing!");
//     break;
//   case marks >= 90 && marks <= 99:
//     console.log("Well done!");
//     break;
//   case marks >= 80 && marks <= 89:
//     console.log("Way to go!");
//     break;
//   case marks >= 75 && marks <= 79:
//     console.log("Keep it up!");
//     break;
//   case marks >= 60 && marks <= 74:
//     console.log("You did good.");
//     break;
//   case marks >= 50 && marks <= 59:
//     console.log("That was good.");
//     break;
//   default:
//     console.log("You failed.");
//     break;
// }


// let friends = ['Henk', 'Peter', 'Jack', 'Lerato', 'Julius']
// console.log(friends);
// console.log(friends.slice(1,2 ));


//___________________________CLASS NOTES_____________________________

// // for, break and continue
// // for (i=0; i<10; i++){
// //   if (i == 8)
// //   break
// //   if ((i%2) >0)// in order to know if a number is even then the remainder is 0 and if there is greater than 0 it is odd. 
// //   continue
// // }

// // let personDetail = {
// //   firstName :'Kgodisho',
// //   lastName :'Lebopa',
// //   age: 25
// // }

// // for of is used inside an Array
// // for in is used in an index
// // index represents property, 'object key'

// // for (let p in personDetail){
// //   console.log(`${p}-> ${personDetail[p]}`);
// // }

// // OR 

// // dot notation
// // console.log(personDetail.firstName);

// // let subjects = ['HTML', 'CSS', 'Delphi', 'JS']
// // for(let subject of subjects) {

// // }

// // ______________________ARRAY METHODS ___________________
// let numbers = [2, 5, 5]
// console.log(numbers);
// console.log(numbers.length);  //to know how many elemnts you have in your array 
// numbers.push (7, 6) //to add a new elemnt in the array we use push
// console.log(numbers)
// numbers.pop()// to remove the last element we use pop
// console.log(numbers)
// numbers.shift //to remove the first element
// console.log(numbers);
// numbers.unshift(10) // to add numbers at the start of the array
// console.log(numbers);
// //console.log(numbers.slice(1, 2)); //this is done to display from a certain part of the element where we start slicing from
// numbers.splice (2, 0, 9, 11 )// allows to add new elements and or to remove 0 means we are adding and if it is 1 it means we are deleting and the first number reffers to the position number. remember the computer starts counting at 0
// console.log (numbers)
// numbers.splice (1, 2)
// console.log(numbers);
// //to remove a duplicate in an array
// // let noDuplicate = []
// // numbers.forEach ((item) => {
// //   if (!noDuplicate.includes(item))
// //   noDuplicate.push(item)
// // })
// // console.log(numbers);

// //but there is a shorter way
// console.log( new Set (numbers) );


// console.log(numbers.indexOf (5)); //this will let us know the index of the first occurance of the duplicate
// console.log(numbers.lastIndexOf (5)) // this will let us know the index of the last occurance of the duplicate


// console.log(numbers.concat ([28, 27])); //this returns a new array?? not sure make sure you find out, therefore we should store in a new variable


