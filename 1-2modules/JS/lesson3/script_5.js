function position(arr) {
  // let arr = [x, y, z]
  let item = 0
  let len = arr.length
  for (let k = 0; k < arr.length; k++) {
    item = arr[0]
    for (let i = 0; i < len; i++) {
      item > arr[i]
        ? ((arr[arr.indexOf(item)] = arr[i]), (arr[i] = item))
        : (item = arr[i])
    }
    len -= 1
  }
  return arr
}

// let a = position(8,5,9)
let a = position([8, 5, 9, 3, 6])
console.log(a)


// for(let i=10;i>0;i--) {
//   console.log(i);
//   }
 
