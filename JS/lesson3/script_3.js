function annogram(str_1, str_2) {
  let count_1 = 0
  let count_2 = 0
  let letter = ''
  if (str_1.length === str_2.length) {
    for (let i = 0; i < str_1.length; i++) {
      if (str_2.indexOf(str_1[i]) === -1) {
        return false
      }
    }
    for (let item of str_1) {
      letter = item
      for (let j = 0; j < str_1.length; j++) {
        letter === str_1[j] ? (count_1 += 1) : null
        letter === str_2[j] ? (count_2 += 1) : null
      }
      if (count_1-1 !== count_2-1) return false
    }
    return true
  } else {
    return false
  }
}

let a = annogram('finder', 'friend')
console.log(a)
a = annogram('test', 'sets')
console.log(a)
a = annogram('abc', 'aaa')
console.log(a)
a = annogram('abb', 'aab')
console.log(a)

// let str_arr = str_2.split('')
// for (let i=0; i<str_1.length;i++){
//     if (str_1[i]!==str_2.split('')[i]){
//         return false
//     }
// }
// return true
