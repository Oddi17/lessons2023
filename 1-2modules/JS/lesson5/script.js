const FOT = (days) => {
    let fot = 0 //every day
    // let days_new = days%7
    // let weeks = Math.ceil(days/7) // 1
    // let premiya = Math.ceil(days/3) * 1000 * weeks*
    // console.log(premiya)
    let weeks_new = 0
    let employers = 1
    let salary = 1000
    let bonus = 0
    for (i=1;i<days;i++) {
        if (i%3 === 0) {
            bonus += 1000 * employers
        }
        if (i%7==0) {
            //week done
            weeks_new++
            employers++
            salary += 1000
            salary *= 1.015
        }
        

    }
    // let premiya = Math.ceil(days/3) * 1000 * weeks*employers
    
    return (salary+bonus)
}
console.log('фот на 8 день =' + FOT(8))
console.log('фот на 21 день =' + FOT(21))
console.log('фот на 4 день =' + FOT(4))