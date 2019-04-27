// Given a string str, reverse it omitting all non-alphabetic characters.

// Example:
// str = "krishan", the output should be "nahsirk".
// str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
  if (/^[a-zA-Z]+$/.test(str)) {
    return (str.split("").reverse().join(""))
  } else {
    let s = str.replace(/[^A-Za-z]/g, "")
    return (s.split("").reverse().join(""))
  }
}

reverseLetter('ultr53o?n')