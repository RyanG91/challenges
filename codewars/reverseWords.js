function reverseWords(str) {
  const array = str.split(' ')
  const reverseArray = []

  array.map(word => reverseArray.push(word.split("").reverse().join("")))
  
  return reverseArray.join(" ")
}

reverseWords('This is an example!')