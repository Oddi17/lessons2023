const Timer = () => {
  const DateOn = document.querySelector('#time-to').value
  if (DateOn === '') return
  let DateOnTime = new Date(DateOn)
  let currentTime = new Date()
  console.log(DateOnTime)
  console.log(currentTime)
  let timeDiff = currentTime - DateOnTime
  if (timeDiff > 0) return
  timeDiff = timeDiff * -1
  console.log(timeDiff)


  let days = Math.floor(timeDiff / 1000 / 3600 / 24)
  console.log(days)
  let hours =
    Math.floor(timeDiff / 1000 / 3600) -
    Math.floor(timeDiff / 1000 / 3600 / 24) * 24

  let minutes = Math.floor((timeDiff / 1000 / 60) % 60)
  let seconds = 60 - currentTime.getSeconds()


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

    if (seconds === 0 && days === 0 && hours === 0 && minutes === 0) {
      seconds = 0
      console.log('End of timer')
      return
    }
    --seconds
    $secondsTime.innerHTML = seconds

    if (hours === 0 && days > 0 && minutes === 0 && seconds === 0) {
      hours = 24
      --days
    }
    $hoursTime.innerHTML = hours
    $daysTime.innerHTML = days

    if (minutes === 0 && hours > 0 && seconds === 0) {
      minutes = 60
      --hours
    }
    $hoursTime.innerHTML = hours
    $minutesTime.innerHTML = minutes

    if (seconds === 0 && minutes > 0) {
      seconds = 60
      --minutes
      $secondsTime.innerHTML = seconds
      $minutesTime.innerHTML = minutes
    }
  }, 1000)
}

const $formDate = document.querySelector('.clock-input')
$formDate.addEventListener('change', (event) => {
  Timer()
})
