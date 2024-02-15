let currentInterval

const Timer = () => {
  const dateOn = document.querySelector('#time-to').value
  if (dateOn === '') return
  let dateOnTime = new Date(dateOn)
  let currentTime = new Date()
  console.log(dateOnTime)
  console.log(currentTime)
  let timeDiff = dateOnTime - currentTime
  if (timeDiff <= 0) {
    console.log("value error")
    return
  }
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

  clearInterval(currentInterval)

  currentInterval = setInterval(() => {

    if (seconds === 0 && days === 0 && hours === 0 && minutes === 0) {
      seconds = 0
      console.log('End of timer')
      clearInterval(currentInterval)
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
