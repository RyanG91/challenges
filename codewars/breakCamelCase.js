// Complete the solution so that the function will break up 
// camel casing, using a space between words.

// Example:
// solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
  let letters = string.replace(/([A-Z])/g, ' $1')
  console.log(letters)
  return letters
}

solution('camelCase')