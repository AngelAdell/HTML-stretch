// declare a variable named `arr` and assign it an array of letters

const arrayOfWords = ['apple', 'beaver', 'culprit', 'diamond', 'echo', 'fish', 'golden', 'house', 'index', 'jam', 'kite', 'lemon', 'mango', 'noodle', 'orange', 'pear', 'queen', 'rabbit', 'snake', 'tiger', 'umbrella', 'violet', 'water', 'x-ray', 'yellow', 'zebra'];

// declare a function named `getTotalLetters` that takes in an array as an argument and returns the total number of letters from the index in the array.
const getTotalLetters = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].length;
  }
  return total;
}
console.log(getTotalLetters(arrayOfWords)); // 130

// - ceate function called secretDecoder that takes in words from the array
// - create variable to store each letter 

const secretDecoders = (arr) => {
  const secret = [];
  for (let i=0; i < arr.length; i++) {
    const word = arr[i];

    const letter = word.charAt(1);
    secret.push(letter);

    secret.join('');

  };
  return secret;
}

// create a function called FizzBuzz iterates through the numbers 1 to 100
 const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// create a a function called reverseArray that takes in an array and returns a new array with the elements in reverse order
arr = ['apple', 'bravo', 'cumin', 'desire', 'echo'];

const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}


const persons = [
  {name: 'John', age: 40, isCute: true},
  {name: 'Derrick', age: 39, isCute: false},
  {name: 'Brad', age: 37, isCute: true},
  {name: 'David', age: 35, isCute: true},
];

// Create an function called getNames that takes in an array of 
// objects
const getNames = (array) => {
  // create a variable to store the names
  const names = [];
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // create a variable to store each object
    const person = array[i];
    // create a variable to store the name of each object
    const name = person.name;
    // push the name of each object into the names array
    names.push(name);
  }
  console.log(names);
  // return the names array
  return names;
}

// console.log(getNames(persons)); // ['John', 'Derrick', 'Brad', 'David']