function minmax(arr) {
  if (arr.length > 10) {
    return "Размер превышает 10"
  }
  let min_num = arr[0]
  let max_num = arr[0]
  let pos_min = 0
  let pos_max = 0
  // arr.shift()
  // console.log(Math.max(arr))
  for (item of arr) {
    min_num > item ? (min_num = item) : null
    max_num < item ? (max_num = item) : null
  }

  pos_min = arr.indexOf(min_num)
  pos_max = arr.indexOf(max_num)
  arr[pos_min]=max_num, arr[pos_max]=min_num
  return arr
}

// let arr = [24, 12, 22, 11, 5, 4, 3, 6, 28, 56]
let arr = [1,2,3,4,5,6,7]

let a = minmax(arr)

console.log(a)
