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
        
    let minutes = Math.floor((timeDiff / 1000) % 3600)
    let minutes_another = Math.floor(timeDiff / 1000 / 60) - Math.floor(timeDiff / 1000 / 3600 / 24) * 24 * 60
    //   let seconds =
    console.log(days)
    console.log(hours)
    console.log('Minutes:' +minutes)
    console.log('Minutes-another:' +minutes_another)
    // console.log(seconds)
}

// seconds = 60
// minutes = 33
const $secondsTime = document.querySelector('.clock-seconds')
const $minutesTime = document.querySelector('.clock-minutes')
const $hoursTime = document.querySelector('.clock-hours')
const $daysTime = document.querySelector('.clock-day')

// //интервальная функция
// setInterval(() => {
//   if (second === 0) seconds = 60
//   $secondsTime.innerHTML = seconds--

//   if (second === 0) $minutesTime.innerHTML = --minutes

//   //   console.log('second:' + second--)
// }, 1000)

const $formDate = document.querySelector('.clock-input')
$formDate.addEventListener('change', (event) => {
  //   event.preventDefault()
  // calc()
  Timer()
})
