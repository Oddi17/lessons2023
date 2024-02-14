const calc = (birthDate) => {
  // const birthDate = document.querySelector('#birthDate').value
  // if (birthDate === '') return
  let result = 'Ваш возраст: '

  let birthDateTime = new Date(birthDate)
  const currentTime = new Date()
  let timeDiff = currentTime - birthDateTime

  if (timeDiff < 0) return

  years = Math.floor(timeDiff / 1000 / 3600 / 24 / 365)
  result += years
  let last_num_string = years.toString().slice(-1)
  if (
    last_num_string == 0 ||
    last_num_string > 4 ||
    days == 11 ||
    days == 12 ||
    days == 13 ||
    days == 14
  ) {
    result += ' лет, '
  } else
    last_num_string == 1 && days != 11 && days != 12 && days != 13 && days != 14
      ? (result += ' год, ')
      : (result += ' года, ')

  let days =
    Math.floor(timeDiff / 1000 / 3600 / 24) -
    365 * Math.floor(timeDiff / 1000 / 3600 / 24 / 365)
  result += days
  last_num_string = days.toString().slice(-1)
  if (
    last_num_string == 0 ||
    last_num_string > 4 ||
    days == 11 ||
    days == 12 ||
    days == 13 ||
    days == 14
  ) {
    result += ' дней, '
  } else {
    last_num_string == 1 && days != 11 && days != 12 && days != 13 && days != 14
      ? (result += ' день, ')
      : (result += ' дня, ')
  }

  let today = currentTime.getHours()
  let togda = birthDateTime.getHours()
  let hours = today - togda

  // let hours =
  //   (timeDiff / 1000 / 3600) - (365 * 24 * Math.floor(timeDiff / 1000 / 3600 / 24 / 365))
  // hours = Math.floor(hours%24)

  result += hours
  last_num_string = hours.toString().slice(-1)
  if (
    last_num_string == 0 ||
    last_num_string > 4 ||
    days == 11 ||
    days == 12 ||
    days == 13 ||
    days == 14
  ) {
    result += ' часов'
  } else {
    last_num_string == 1 && days != 11 && days != 12 && days != 13 && days != 14
      ? (result += ' час')
      : (result += ' часа')
  }

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
  if (Day > d[month]) {
    itog_month = month
  } else {
    itog_month = month - 1
  }
  if (itog_month < 0) {
    retZod += zodiacs.pop()
  } else retZod += zodiacs[itog_month]
  return [result, retZod]
}

const ShowAge = () => {
  const birthDate = document.querySelector('#birthDate').value
  if (birthDate === '') return
  AgeAndZodiac = calc(birthDate)
  let resultElem = document.querySelector('.result')
  if (resultElem) {
    resultElem.remove()
  }
  const $resultContainer = document.createElement('div')
  $resultContainer.className = 'result'
  $resultContainer.style.cssText = `
  margin-top: 15px;
  background: #6f8dd342;
  font-family: Arial;
  font-weight:bold;
  padding: 10px;
  border: solid rgb(106 148 211 / 54%);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center
`
  $resultContainer.children.style = 'display:inline-block'
  // let age = '<span>'+AgeAndZodiac[0]+'</span>'
  // let zodiac = '<span>'+AgeAndZodiac[1]+'</span>'
  const $mainCountainer = document.querySelector('.container')
  let arrayFromResult = Array.from($resultContainer.children)
  // console.log($resultContainer)
  AgeAndZodiac.forEach((elem, index) => {
    $resultContainer.innerHTML += '<div>' + elem + '</div>'
  })
  $mainCountainer.append($resultContainer)
}
const $button = document.querySelector('.btn-primary')
$button.addEventListener('click', (event) => {
  event.preventDefault()
  ShowAge()
})
