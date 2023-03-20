const form = document.querySelector('form')
const input = document.getElementById('input')
const choose = document.getElementsByName('choose')
const loop = document.getElementById('loop')
const numbers = document.getElementById('numbers')
const twinDisplay = document.getElementById('twinPrimes')
const primeDisplay = document.getElementById('primes')
const squareDisplay = document.getElementById('squares')
let squares, primes, twins

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
  twins = []
   
  let inputVal = parseInt(input.value)
  
  // make sure number is not one
  if (inputVal <= 1) {
    console.log('Number must be greater then 1')
    return
  }

  // Check for primes
  if (choose[0].checked){
    loopCheck(isPrime, inputVal, primes)
    twinPrimes(primes)
  }

  // Check for squares
  if (choose[1].checked){
    loopCheck(isSquare, inputVal, squares)
  }
  console.timeEnd('Count')

  printRes(twins, twinDisplay)
  printRes(primes, primeDisplay)
  printRes(squares, squareDisplay)
}

/* -------------------------------------------------------------------------- */
/*                      Functions to check for property's                     */
/* -------------------------------------------------------------------------- */

// Check if number is Prime
function isPrime(num, primes) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  console.log(`${num} is prime`)
  primes.push(num)
  return true
}

// Check if number is a Square
function isSquare(num, squares){  
  let squareRoot = Math.sqrt(num);
  if (num % squareRoot === 0) {
    squares.push({'Number' : num, 'SquareRoot': squareRoot})
    return squareRoot;
  }
  return false
}

// Check how many twin primes are in the primes array
function twinPrimes(arr) {
  let counter = 0
  twins = []
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1])
    if (diff === 2) {
      twins.push({'First' : arr[i], 'Second' : arr[i + 1]})
      counter++
    }
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



function printRes(arr, display) {
  let create = document.createElement('h2');
  let counter = 1
  display.innerHTML = `Input Number ${input.value}`
  if (typeof arr[0] === "object") {
    arr.forEach(item => {
      let keys = Object.keys(item)
      create.innerHTML += `${counter} [`
      keys.forEach(key => {
        create.innerHTML += `${item[key]}, `
      })
      create.innerHTML = create.innerHTML.slice(0, -2) // remove the trailing comma and space
      create.innerHTML += `]<br>`
      counter++
    })
    display.appendChild(create);
  } else {
    arr.forEach(item => {
      create.innerText += `${item}, `
    });
    display.appendChild(create);
  }
}
