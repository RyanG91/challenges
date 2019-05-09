// You will be given a number and you will need to return it as a string in Expanded Form

// Example:
// expandedForm(12); => Should return '10 + 2'
// expandedForm(42); => Should return '40 + 2'
// expandedForm(70304); => Should return '70000 + 300 + 4'

function expandedForm(num) {
  let array = num.toString().split("")
  let arrayNumber = array.map((n,i,a) => n * Math.pow(10, a.length-i-1))

  let string = arrayNumber.filter(n => n > 0).join(" + ")
  return string
}

expandedForm(12)