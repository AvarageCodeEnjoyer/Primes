const form = document.querySelector('form')
const input = document.getElementById('input')

form.addEventListener('submit', e => {
  e.preventDefault()
  isPrime(input.value)
})

function isPrime(num) {
  if (num <= 1) return
  if (num % Math.sqrt(num) === 0) {
    console.log(`${num} is a square`)
    return
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} is NOT prime`)
      return false
    }
  }
  console.log(`${num} is prime`)
}
