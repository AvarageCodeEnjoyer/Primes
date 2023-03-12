const form = document.querySelector('form')
const input = document.getElementById('input')
const choose = document.getElementsByName('choose')
const loop = document.getElementById('loop')
const numbers = document.getElementById('numbers')
let squares, primes

form.addEventListener('submit', e => {
  e.preventDefault()
  if (!choose[0].checked && !choose[1].checked) return
  chooseFun()
})

function chooseFun() {
  console.clear()
  console.time('Count') 
  primes = []
  squares = []
   
  let inputVal = parseInt(input.value)
  
  // make sure number is not one
  if (inputVal <= 1) {
    console.log('Number must be greater then 1')
    return
  }

  // Check for primes
  if (choose[0].checked){
    loopCheck(isPrime, inputVal, primes)
    console.log(`There are ${primes.length} primes before ${inputVal}`)
    twinPrimes(primes)
    console.log(primes)
  }

  // Check for squares
  if (choose[1].checked){
    loopCheck(isSquare, inputVal, squares)
  }
  console.timeEnd('Count')
}

/* -------------------------------------------------------------------------- */
/*                      Functions to check for property's                     */
/* -------------------------------------------------------------------------- */

// Check if number is Prime
function isPrime(num, primes) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} is NOT a prime`)
      return false
    }
  }
  console.log(`${num} is prime`)
  primes.push(num)
  return true
}

// Check if number is a Square
function isSquare(num, squares){  
  if (num <= 1) {
    console.log('Number must be greater then 1')
    return false
  }
  let squareRoot = Math.sqrt(num);
  if (num % squareRoot === 0) {
    console.log(`${num} is ${squareRoot} squared`);
    squares.push(num, squareRoot)
    return squareRoot;
  }
  console.log(`${num} is NOT a square`)
  return false
}

// Check how many twin primes are in the primes array
function twinPrimes(arr) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1])
    if (diff === 2) counter++
  }
  console.log(`There are ${counter} twin primes in this array`)
}

/* -------------------------------------------------------------------------- */
/*                        function to reduce repetition                       */
/* -------------------------------------------------------------------------- */

function loopCheck(funCall, inputVal, arr) {
  if (loop.checked){
    for (let i = 2; i <= inputVal; i++){
      funCall(i, arr)
    }
  }
  else{
    funCall(inputVal, arr)
  }
}