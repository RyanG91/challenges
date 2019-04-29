// Given an array of one's and zero's convert the 
// equivalent binary value to an integer.

// Example:
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  let string = arr.join('')
  let binaryNumber = parseInt(string, 2)
  let r = 0
  for (let i = 0; i < arr.length; i++) {
    r = r * 2 + (arr[i] == '1' ? 1 : 0)
  }

  return binaryNumber
};

binaryArrayToNumber([0,1,0,1])