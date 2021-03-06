// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// Example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let total = 0
  let count = 0
  while (count < n) {
    count += 1
    if (count % 3 == 0) {
      total = total + count
    } else if (count % 5 == 0) {
      total = total + count
    }
  }
  return total
}