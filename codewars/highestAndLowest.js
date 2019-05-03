// In this little assignment you are given a string of space separated 
// numbers, and have to return the highest and lowest number.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(numbers){
  let highestAndLowest = []
  let array = numbers.split(' ').map(Number)

  highestAndLowest.push((Math.max(...array)))
  highestAndLowest.push((Math.min(...array)))

  return (highestAndLowest.join(' '))
}


highAndLow("1 2 3 4 5 6 7")
