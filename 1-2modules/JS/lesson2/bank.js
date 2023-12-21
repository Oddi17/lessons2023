const queue = ['Иван','Мария','Саша','Даша']
const outside = ['Амфибрахий']

let act1 = queue.shift()
let act2 = queue.pop()
// let act3 = queue.pop()
queue.push(outside.pop())
// queue.push(act3)
outside.push(act1,act2)


console.log('В очереди: '+queue+'\n'+'Вне банка: '+outside)

console.log((!+[]+[]+![]).length)