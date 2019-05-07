// When provided with a String, capitalize all vowels

// Example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"

function swap(st){
  let st = st.replace(/[aeiou]/g, (vowels) => {
    return vowels.toUpperCase()
  })
  return st
}

swap("Hello World!")