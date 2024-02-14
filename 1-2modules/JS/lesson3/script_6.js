function geometr(num) {
  let arr = String(num).split('')
  let item = 0
  for (let k = 0; k < arr.length; k++) {
    item = arr[0]
    for (let i = 0; i < arr.length; i++) {
      item > arr[i]
        ? ((arr[arr.indexOf(item)] = arr[i]), (arr[i] = item))
        : (item = arr[i])
    }
  }
  console.log(arr)
  let number = arr[1] / arr[0]
  for (let j = 2; j < arr.length; j++) {
    if (arr[j] / arr[j - 1] !== number) {
      return 'нет'
    }
  }
  return 'да'
}

let a = geometr(193)
console.log(a)
a = geometr(123)
console.log(a)
a = geometr(391)
console.log(a)
a = geometr(248)
console.log(a)
