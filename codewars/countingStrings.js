/*
Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the 
input string. The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text){

  let arrayText = text.toLowerCase().split('')

  var arrayDup = arrayText.filter(function(a, b) {
    return arrayText.indexOf(a) !== b
  })
  
  return arrayDup.filter(function(value, pos) {
    return arrayDup.indexOf(value) == pos
  }).length
}

duplicateCount("Indivisibilities")
