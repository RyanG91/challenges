// The examples below show you how to write function 

// Example:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let result = []
  let sArray = s.split('').toLowerCase()

  for (let i = 0; i < sArray.length; i++) {
    sArray[i] = sArray[i].toUpperCase() + sArray[i].repeat(i)
  }

  result = sArray.join('-')
  return result
}

accum("abcd")