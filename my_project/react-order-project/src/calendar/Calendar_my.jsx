import arrow_next from '/arrow_next.svg'
import arrow_prev from '/arrow_prev.svg'

export default function CalendarMy() {
  let choosedElem 
  function handleClick(e) {
    let classOnElement = e.target.classList
    if (classOnElement.contains("choose") === true) {
      classOnElement.remove("choose")
      choosedElem = ""
      console.log(choosedElem)
    }else {
      classOnElement.add("choose")
      choosedElem = e.target.textContent
      console.log(choosedElem)
    }
    console.log(classOnElement)
  }

  let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  //надо будет сделать переключение месяцев +1 -1
  // let curNumMounth = new Date().getMonth()

  const curNameMounth = new Date().toLocaleString('ru', {       
    month: 'long'       
  })
  const upperMonthName = curNameMounth.charAt(0).toUpperCase() + curNameMounth.slice(1);

  function generateCalendar(date) {
    let curDay = date.getDate()
    date.setDate(1)
    let startDay = date.getDay()
    let daysTotal =
      !(date.getFullYear() % 4) && date.getMonth() === 1
        ? 29
        : dayInMonth[date.getMonth()]

    let calendarContent = []
    for (let i = 0; i < startDay; i++) {
      calendarContent.push(<div key={`no-day-${i}`} className="no-day"></div>)
    }

    for (let i = 1; i <= daysTotal; i++) {
      if (i === curDay) {
        calendarContent.push(<div key={`cur-day-${i}`} className="cur-day" onClick={handleClick}>{i}</div>)
      } else {
        calendarContent.push(<div key={`day-${i}`} onClick={handleClick}>{i}</div>)
      }
    }
    return calendarContent
  }

  return (
    <div className="calendar">
      <div className="calendar-head">
        <img src={arrow_prev}></img>
        {/* <div>{arrow}</div> */}
        <h3>{upperMonthName}</h3>
        <img src={arrow_next}></img>
      </div>
      <div className="calendar-days">
        <div>Пн</div>
        <div>Вт</div>
        <div>Ср</div>
        <div>Чт</div>
        <div>Пт</div>
        <div>Сб</div>
        <div>Вс</div>
      </div>
      <div className="calendar-body">{generateCalendar(new Date())}</div>
    </div>
  )
}
