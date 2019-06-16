// There is an array with some numbers. All numbers are equal,
// except for one. Try to find it!

// Example:
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  let toObject = {}
  let result = 0

  arr.forEach(function(element) {
    toObject[element] ? toObject[element]++ : toObject[element] = 1;
  });

  if (Object.values(toObject).includes(1)) {
    result = (Object.keys(toObject).find(key => toObject[key] === 1))
  }

  return parseFloat(result)
}

findUniq([ 1, 1, 1, 2, 1, 1 ])
