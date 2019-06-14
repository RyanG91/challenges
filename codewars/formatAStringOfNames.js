// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except
// for the last two names, which should be separated by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''

function list(names) {
  let nameArray = names.map(a => a.name)

  let result = (nameArray.length > 1 ? nameArray.slice(0,-1).join(', ') + ' & ' : '') + nameArray.slice(-1)

  return result
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])