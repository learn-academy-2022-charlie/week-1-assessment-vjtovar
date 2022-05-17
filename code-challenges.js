// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//Pseudo code
// Create a function named big string
// big string will take in two arguments of strings
// use conditionals to compare the length of the strings
// return which ever string is larger
  const bigString = (string1, string2) => {
    if(string1.length > string2.length){
      return string1
    } else {
      return string2
    }
  }
  console.log(bigString(fruit1, fruit2))
  console.log(bigString(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Pseudo code
// Create a function named boiling point
// boiling point will take in an argument of temperature
// use a conditional statement to check temperature
// return boiling point of temperature

const boilingPoint = (temperature) => {
  if(temperature === 212) {
    return `${temperature} at boiling point`
  } else if(temperature > 212){
    return `${temperature} above boiling point`
  } else {
    return `${temperature} below boiling point`
  }
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Pseudo code
// concatinated both variables
// return the length

console.log(myNumbers1.concat(myNumbers2).length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

// Pseudo code
// Convert the string into an array using split
// reverse the the letters using reverse method

console.log(currentCohort.reverse.split(" ").reverse)

// TypeError: string.reverse is not a function is what I keep getting. I don't understand why




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Pseudo code
// Create a function named evenOdd
// evenOdd will take in a parameter of numbers
// create a for loop to iterate though the array
// return even or odd

const evenOdd = (numbers) => {
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
    return "even"
  } else {
    return "odd"
  }
}
}
console.log(evenOdd(myArray))
// not understanding why it is only returning even one time.


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// Pseudo code
// Create a function named subtract with 2 parameters
//create a conditional statement to subtract smaller number from larger number


const subtract = (num1, num2) => {
  if(num1 > num2){
    return num1 - num2
  } else if(num1 < num2){
    return num2-num1
  }
  }

console.log(subtract(number1, number2))
console.log(subtract(number3, number4))
