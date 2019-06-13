// Modify the kebabize function so that it converts a camel case string into a kebab case.

// Examples:
// kebabize('camelsHaveThreeHumps') => camels-have-three-humps
// kebabize('camelsHave3Humps') => camels-have-humps

function kebabize(str) {
  let removeNumbers = str.replace(/[0-9]/g, '')
  let array = removeNumbers.split(/(?=[A-Z])/)
  let kebabCase = array.join('-').toLowerCase()
  return kebabCase
}
