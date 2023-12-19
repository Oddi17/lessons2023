const fot = (day) => {
    let fot = 0
    let bonus = 0
    let salaryStaff = 0
  
    let staff = [{ numberStaff: 1, salary: 1000 }]
  
    for (let i = 1; i <= day; i++) {
      if (i % 30 === 0) {
        fot = 0
      }
  
      if (i % 7 === 0) {
        for (let j = 0; j < staff.length; j++) {
          staff[j]['salary'] += staff[j]['salary'] * 0.015
        }
  
        staff.push({ numberStaff: staff.length + 1, salary: 1000 })
      }
  
      if (i % 3 === 0) {
        bonus += 1000 * staff.length
      }
    }
  
    for (let y = 0; y < staff.length; y++) {
      salaryStaff += staff[y].salary
    }
    console.log(staff)
    console.log(staff[staff.length - 1]['numberStaff'])
  
    fot = bonus + salaryStaff
  
    return console.log(fot)
  }