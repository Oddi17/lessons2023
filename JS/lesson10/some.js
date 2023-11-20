const date1 = new Date(Date.UTC(2023, 4, 4, 0, 0, 0))
const date2 = new Date(Date.UTC(2021, 7, 24, 0, 0, 0))

let dif = -(((date2 - date1)/1000)/3600)/24
console.log(dif)


const dateFormate = (date) => {
    // console.log(date.getDay(),date.getMonth(),date.getFullYear())
    let formatdate = ''
    if (typeof(date) !== 'object') return
    formatdate = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear()
    return formatdate
}

const today = new Date()
formdate = dateFormate(today)
console.log(formdate)


