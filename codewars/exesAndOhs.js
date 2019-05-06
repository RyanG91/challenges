// Check to see if a string has the same amount of 'x's and 'o's. The method must return 
// a boolean and be case insensitive. The string can contain any char.

// Examples:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true

function XO(str) {
  var total = {}

  string = str.toLowerCase()
  string.split('').forEach(function(s) {
    total[s] ? total[s]++ : total[s] = 1
  })

  if (total.x == total.o) {
    return true
  } else {
    return false
  }
}

XO('xxOo')