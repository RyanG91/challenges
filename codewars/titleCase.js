

function titleCase(title, minorWords) {
  let titleArray = title.toLowerCase().split(' ')

  let minorWordsArray

  if (minorWords) {
    minorWordsArray = minorWords.toLowerCase().split(' ')
  } else {
    minorWordsArray = []
  }

  for (let index = 0; index < titleArray.length; index++) {
    let currentWord = titleArray[index]

    if (minorWords == undefined) {
      titleArray[index] = titleArray[index].charAt(0).toUpperCase() + titleArray[index].substring(1)
    } else {
      if (!minorWordsArray.includes(currentWord) || index === 0) {
        titleArray[index] = titleArray[index].charAt(0).toUpperCase() + titleArray[index].substring(1)
      }
    }
  }
  let result = titleArray.join(' ')

  return result
}

titleCase('THE WIND IN THE WILLOWS', 'The In')