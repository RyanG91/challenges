// Revisit and make sure you understand this.

function matrixAddition(a, b){
  //TODO
  total = []
  total = new Array(a.length)
  for (let i = 0; i < total.length; i++) {
    total[i] = new Array(a[i].length)
    for (let j = 0; j < total[i].length; j++) {
      total[i][j] = a[i][j] + b[i][j]
    }
  }
  return total

  // Would work if it wasnt an array inside an array.
  // a.forEach((a, i) => total.push(a + b[i]))
}

matrixAddition([[1,2],[3,4]], [[2,3],[4,5]])