function high(x){
  const wordsArray = x.split(' ')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const wordsIndexTotal = wordsArray.map(word => {
    let total = 0;
    for (let i = 0; i < word.length; i++) {
      total += alphabet.indexOf(word[i])
    }
    return total
  })

  return wordsArray[wordsIndexTotal.indexOf(Math.max(...wordsIndexTotal))]
}

high('man i need a taxi up to ubud')




















  // let newArr = lowerCase.map(word => {
  //   let sum = 0;
  //   for (let i = 0; i < word.length; i++) {
  //     sum += alphabet.indexOf(word[i]);
  //   }
  //   console.log(sum);
  // });