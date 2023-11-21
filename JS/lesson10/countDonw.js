const Timer = () => {
  const DateOn = document.querySelector('#time-to').value
  if (DateOn === '') return
  let DateOnTime = new Date(DateOn) //.toUTCString()
  let currentTime = new Date()
  console.log(DateOnTime)
  console.log(currentTime)
  let timeDiff = currentTime - DateOnTime
  if (timeDiff > 0) return
  timeDiff = timeDiff * -1

  //   console.log(timeDiff)
  let days = Math.floor(timeDiff / 1000 / 3600 / 24)
  let hours = Math.floor(timeDiff / 1000 / 3600) - Math.floor(timeDiff / 1000 / 3600 / 24) * 24
  // let hours = Math.floor(timeDiff / 1000 / 60 / 60)
  let minutes = Math.floor((timeDiff / 1000 / 60) % 60)
  let seconds = 60 - currentTime.getSeconds()

  // console.log('Days:'+days)
  // console.log('Hours:'+hours)
  // console.log('Minutes:' +minutes)
  // console.log('Seconds:'+seconds)

  const $secondsTime = document.querySelector('.clock-seconds')
  const $minutesTime = document.querySelector('.clock-minutes')
  const $hoursTime = document.querySelector('.clock-hours')
  const $daysTime = document.querySelector('.clock-day')

  $secondsTime.innerHTML = seconds
  $minutesTime.innerHTML = minutes
  $hoursTime.innerHTML = hours
  $daysTime.innerHTML = days

  //интервальная функция
  setInterval(() => {
    if (days === hours === minutes === 0) {
      seconds = 0
      console.log('End of timer')
      return
    }
    if (seconds === 0) seconds = 60
    $secondsTime.innerHTML = --seconds
    

    if (minutes === 0 && hours > 0) minutes = 60
    if (seconds === 0) $minutesTime.innerHTML = --minutes
    

    if (hours === 0 && days > 0) hours = 24
    if (minutes === 0) $hoursTime.innerHTML = --hours
    

    if (hours === 0) $daysTime.innerHTML = --days

    
  }, 1)
}


const $formDate = document.querySelector('.clock-input')
$formDate.addEventListener('change', (event) => {
  //   event.preventDefault()
  // calc()
  Timer()
})
