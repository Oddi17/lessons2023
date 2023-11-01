let arr = [24,12,22,11,5,4,3,6,28,56]

let min_num = arr[0]
let max_num = arr[0]
arr.shift()

for (item of arr){
    min_num > item ? min_num = item:null
    max_num < item ? max_num = item:null
}
console.log(min_num,max_num)