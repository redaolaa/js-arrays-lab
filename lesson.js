// * Arrays an ordered sequence of elements (items) 🍿

const movies = [
  'Deadpool and Wolverine', // <-- the first element, index 0
  'Jurassic Park', 
  'Interstellar', 
  'Dune' // < -- last element, index: movies.length - 1
]

const firstMovie = movies[0]
// console.log(firstMovie)

const lastMovie = movies[movies.length - 1]
// console.log(lastMovie)

// ! Updating arrays

// * Info: There are many different 'methods' available on arrays in JS
// * Method is a function that lives on an object (in this case, our array)

// ? Removing an element from the end of an array
const removedFinalMovie = movies.pop()
// console.log("Removed movie: ", removedFinalMovie)
// console.log("Updated array: ", movies)

// ? Adding an element to the end of an array
const newArrayLength = movies.push("Joker 2")
// console.log("New array length: ", newArrayLength)
// console.log("Updated array: ", movies)

// ? Reassign elements of an array
movies[3] = "Joker"
// console.log("Updated array: ", movies)

// ! Looping with arrays

// ? Print every movie in my array
// for (let index = 0; index < movies.length; index++) {
//   console.log(movies[index])
// }

// ! If you're interested in the movie but don't really care about the index (often), here's an alternative:
// * "for of" loop
// ? Here, const movie will automatically be the first element of my array
// ? and then it will loop through every movie in movies.
// ? This is a style of programming called declarative programming. 
// for (const movie of movies) {
//   console.log(movie)
// }

// ? reverse an array
// console.log(movies.reverse())

// * The foreach method on an array in javascript

// ! foreach is a method on an array that loops through that array.

// ? You will usually use an arrow function to help you with this.

// const movies = [ 'Deadpool and Wolverine', 'Jurassic Park', 'Interstellar', 'Dune']

movies.forEach((movie) => {
  console.log(movie)
})

// const printMovie = (movie) => {
//   console.log(movie)
// }

// ? When you have a function, like foreach, that has another function as its
// ? argument, like printMovie, printMovie is a 'callback' function.
// movies.forEach(printMovie)

// ! Effectively, line 72 does this:
// loop through each movie..
// printMovie('Deadpool and Wolverine')
// printMovie('Jurassic Park')
// printMovie('Interstellar')
// printMovie('Dune')

const nums = [-34, 100, 53, 42]

// ? If you want the index of each element, its always the SECOND parameter to forEach
nums.forEach((num, idx) => {
  console.log("The element is: ", num)
  console.log('The index is: ', idx)
})

// ! Array mapping

// * This is imperative programming, we're telling the machine what to do step-by-step
const numbers = [2, 4, 6, 8, 10]
// ? I would like a new array, newNumbers, where all the numbers are DOUBLED.
const newNumbers = []

for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index]
  newNumbers.push(num * 2)
}

// console.log(newNumbers)

// * Here is an example using functional programming
// const doubledNumbers = numbers.map((num) => {
//   return num * 2
// })

const doubledNumbers = numbers.map((num) => num * 2)

console.log(numbers)
console.log(doubledNumbers)