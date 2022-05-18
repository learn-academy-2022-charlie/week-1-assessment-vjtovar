// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))


// a) Your answer: It will add the string to the back of the array.
// b) Verify and explain: My answer was incorrect. The output was 5 because push is a mutator.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: It will log the length of the string.
// b) Verify and explain: My answer was correct. The output was 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This will log the value at the 4th index.
// b) Verify and explain: My answer was correct, the outpu was o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: This will log the string that is in the 1st index.
// b) Verify and explain: I was correct, the output is Ruby.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will capitalize the strings
// b) Verify and explain: This logged a function error. I found that this error occurs when applying a string method to a value that is not a string.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: This will log the data type
// b) Verify and explain: This logged number, because when the length method is added the output is the length of the array and the datatype is a number.
