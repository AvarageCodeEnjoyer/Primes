const form = document.querySelector('form')
const input = document.getElementById('input')
const choose = document.getElementsByName('choose')
const loop = document.getElementById('loop')
const numbers = document.getElementById('numbers')
let squares, primes

form.addEventListener('submit', e => {
  e.preventDefault()
  console.clear()
  console.time('Count')

  let inputVal = input.value
  
  // Check for primes
  if (choose[0].checked){
    if (loop.checked){
      for (let i = 2; i <= inputVal; i++){
        isPrime(i)
      }
      return
    }
    isPrime(inputVal)
  }

  // Check for squares
  if (choose[1].checked){
    if (loop.checked){
      for (let i = 2; i <= inputVal; i++){
        isSquare(i)
      }
      return
    }
    isSquare(inputVal)
  }
  console.timeEnd('Count')
})

/* -------------------------------------------------------------------------- */
/*                      Functions to check for property's                     */
/* -------------------------------------------------------------------------- */

// Check if number is Prime
function isPrime(num) {
  let primes = []
  if (num <= 1) {
    console.log('Number must be greater then 1')
    return
  }
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
  squares = []
  if (num <= 1) {
    console.log('Number must be greater then 1')
    return false
  }
  if (num % Math.sqrt(num) === 0) {
    console.log(`${num}, is ${Math.sqrt(num)} squared`)
    squares.push(num)
    return true
  }
  console.log(`${num} is NOT a square`)
  return false
}