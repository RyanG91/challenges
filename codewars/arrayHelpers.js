/*
This kata is designed to test your ability to extend the functionality of 
built-in classes. In this case, we want you to extend the built-in Array 
class with the following methods: square(), cube(), average(), sum(), 
even() and odd().

Examples:
square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
*/

Array.prototype.square = function() {
  // This maps/checks each array value
  return this.map(function(arrValue) {
    // This times each value by itself
    return arrValue * arrValue
  })
}

Array.prototype.cube = function() {
  // Same as above
  return this.map(function(arrValue) {
    return arrValue * arrValue * arrValue
  })
}

Array.prototype.sum = function() {
  let total = 0
  // Loops through an array and adds each value to the total
  this.forEach(function(arrValue) {
    total = total + arrValue
  })
  return total
}

Array.prototype.average = function() {
  // Use our own created method for the total and divide by array length
  let average = this.sum() / this.length
  return average
}

Array.prototype.even = function() {
  let evenArray = []
  // filter will check each array value and push them based on the if statement
  this.filter(function(arrValue) { 
    if (arrValue % 2 === 0) {
      evenArray.push(arrValue)
    }
  })
  return evenArray
}

Array.prototype.odd = function() {
  let oddArray = []
  // Same as above
  this.filter(function(arrValue) { 
    if (arrValue % 2 !== 0) {
      oddArray.push(arrValue)
    }
  })
  return oddArray
}

// let numbers = [1,2,3,4,5]
// numbers.even()
