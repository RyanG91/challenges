function matrixAddition(a, b){
  total = []
  total = new Array(a.length)
  for (let i = 0; i < total.length; i++) {
    total[i] = new Array(a[i].length)
    for (let j = 0; j < total[i].length; j++) {
      total[i][j] = a[i][j] + b[i][j]
    }
  }
  return total
}

matrixAddition([[1,2],[3,4]], [[2,3],[4,5]])