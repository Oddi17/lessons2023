document.querySelector('#birthDate').value

const calc = () => {
  const birthDate = document.querySelector('#birthDate').value
  if (birthDate === '') return
  let result = 'Ваш возраст: '

  let birthDateTime = new Date(birthDate)
  const currentTime = new Date()

  let timeDiff = currentTime - birthDateTime

  if (timeDiff < 0) return

  years = Math.floor(timeDiff / 1000 / 3600 / 24 / 365)
  result += years
  let last_num_string = years.toString().slice(-1)
  // console.log(last_num_string)
  if (last_num_string == 0 || last_num_string > 4) {
    result += ' лет, '
  } else last_num_string == 1 ? (result += ' год, ') : (result += ' года, ')

  let days =
    Math.floor(timeDiff / 1000 / 3600 / 24) -
    365 * Math.floor(timeDiff / 1000 / 3600 / 24 / 365)
  result += days
  last_num_string = days.toString().slice(-1)
  if (last_num_string == 0 || last_num_string > 4) {
    result += ' дней, '
  } else {
    last_num_string == 1 ? (result += ' день, ') : (result += ' дня, ')
  }

  let today = currentTime.getHours()
  let togda = birthDateTime.getHours()
  // console.log(today)
  // console.log(togda)
  let hours = today - togda

  // let hours =
  //   (timeDiff / 1000 / 3600) - (365 * 24 * Math.floor(timeDiff / 1000 / 3600 / 24 / 365))
  // hours = Math.floor(hours%24)

  result += hours
  last_num_string = hours.toString().slice(-1)
  if (last_num_string == 0 || last_num_string > 4) {
    result += ' часов'
  } else {
    last_num_string == 1 ? (result += ' час') : (result += ' часа')
  }
  // console.log(result)

  //знак зодиака
  let retZod = 'Ваш знак по гороскопу: '
  const zodiacs = [
    'Водолей',
    'Рыбы',
    'Овен',
    'Телец',
    'Близнецы',
    'Рак',
    'Лев',
    'Дева',
    'Весы',
    'Скорпион',
    'Стрелец',
    'Козерог',
  ]
  d = [20, 18, 20, 20, 21, 21, 22, 23, 22, 23, 22, 21]

  const month = birthDateTime.getMonth()
  const Day = birthDateTime.getDate()
  let itog_month = 0
  // Day > d[month] ? retZod += zodiacs[month] : retZod += zodiacs[month-1]
  // Day > d[month] ?  itog_month = month : itog_month = month-1
  if (Day > d[month]) {
    itog_month = month
  } else {
    itog_month = month - 1
  }
  if (itog_month < 0) {
    retZod += zodiacs.pop()
    // else if (itog_month < 0)
  } else retZod += zodiacs[itog_month]

  console.log(retZod)
  // console.log(retZod)
  return [result, retZod]
}

const ShowAge = () => {
  let age, zodiac
  AgeAndZodiac = calc()

  console.log(AgeAndZodiac[0], AgeAndZodiac[1])
}
const $button = document.querySelector('.btn-primary')
$button.addEventListener('click', (event) => {
  event.preventDefault()
  // calc()
  ShowAge()
})
