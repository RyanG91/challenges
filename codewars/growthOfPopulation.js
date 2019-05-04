
function nbYear(p0, percent, aug, p) {
  let population = p0
  let years = 0
  while (population < p) {
    let percentage = population * (percent / 100)
    population = population + percentage + aug
    years += 1
  }
  return years
}

nbYear(1500, 5, 100, 5000)