// Each exclamation mark weight is 2; Each question mark weight is 3. 
// Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, 
// return "Right"; If they are balanced, return "Balance".

// Examples:
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left, right) {
  let leftArray = left.split('')
  let rightArray = right.split('')
  let leftCount = 0
  let rightCount = 0

  leftArray.forEach(element => {
    if (element == '!') {
      leftCount = leftCount + 2
    } else if (element == '?') {
      leftCount = leftCount + 3
    }
  });

  rightArray.forEach(element => {
    if (element == '!') {
      rightCount = rightCount + 2
    } else if (element == '?') {
      rightCount = rightCount + 3
    }
  })

  if (leftCount > rightCount) {
    return 'Left'
  } else if (leftCount == rightCount) {
    return 'Balance'
  } else {
    return 'Right'
  }

  // console.log(leftCount, rightCount)
}

balance('!!', '??')