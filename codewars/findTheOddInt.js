// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples:
// findOdd([10]) = 10
// findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) = 5
// findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) = -1

function findOdd(A) {
  let object = {}
  let odd = 0

  A.map(numbers => {
    object[numbers] ? object[numbers]++ : object[numbers] = 1;
  })

  if (Object.values(object % 2 !== 0)) {
    odd = (Object.keys(object).find(key => object[key] % 2 !== 0))
  }

  return parseInt(odd)
}

findOdd([1,1,2,-2,2,-1,-2])