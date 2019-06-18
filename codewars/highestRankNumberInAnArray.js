// Write a method highestRank(arr) (or highest-rank in clojure),
// which returns the number which is most frequent in the given input array (or ISeq). 
// If there is a tie for most frequent number, 
// return the largest number of which is most frequent.

// Examples:
// [12, 10, 8, 12, 7, 6, 4, 10, 12] => 12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] => 12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] => 3

function highestRank(arr) {
  let object = {}

  arr.map(arrValue => {
    object[arrValue] ? object[arrValue]++ : object[arrValue] = 1;
  })

  let result = Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b)
  
  return parseInt(result)
}
