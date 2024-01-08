import arrow_next from '/arrow_next.svg'
import arrow_prev from '/arrow_prev.svg'
import { useState } from 'react'

export default function CalendarMy({dateNow,name}) {
  let choosedElem 
  let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [upperMonthName,setUpperMonthName] = useState(name)

  function upperDate(date) {
    let curNameMounth = date.toLocaleString('ru', {       
      month: 'long'       
      })
    const upperName = curNameMounth.charAt(0).toUpperCase() + curNameMounth.slice(1)
    return upperName 
  }
  
  function switchMonth(e) {
    let direction = e.target.id
    if (direction=="next"){
      dateNow.setMonth(dateNow.getMonth() + 1);
      setUpperMonthName(upperDate(dateNow))
    }else if (direction=="prev"){
      if (new Date().getMonth() === dateNow.getMonth() && new Date().getFullYear() === dateNow.getFullYear()){
        console.log('tot je month') 
        return
      }
      dateNow.setMonth(dateNow.getMonth() - 1)
      setUpperMonthName(upperDate(dateNow))
    }
  }

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

  function generateCalendar(date) {
    let calendarContent = []
    if (new Date().getMonth() != date.getMonth()){
      date.setDate(1)
      let startDay = date.getDay()
      let daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()]
      for (let i = 1; i < startDay; i++) {
        calendarContent.push(<div key={`no-day-${i}`} className="no-day"></div>)
      }
      for (let i = 1; i <= daysTotal; i++) {
          calendarContent.push(<div key={`day-${i}`} onClick={handleClick}>{i}</div>)
        }
      }else {
        date = new Date()
        let curDay = date.getDate()
        let startDay = date.getDay()
        console.log(startDay)
        let daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()]
        for (let i = 1; i < startDay; i++) {
          calendarContent.push(<div key={`no-day-${i}`} className="no-day"></div>)
        }
        for (let i = 1; i <= daysTotal; i++) {
          if (i === curDay) {
            calendarContent.push(<div key={`cur-day-${i}`} className="cur-day" onClick={handleClick}>{i}</div>)
          } else {
            calendarContent.push(<div key={`day-${i}`} onClick={handleClick}>{i}</div>)
          }
        }
      }
    return calendarContent
  }

  return (
    <div className="calendar">
      <div className="calendar-head">
        <img src={arrow_prev} id='prev' onClick={switchMonth}></img>
        <h3>{upperMonthName}</h3>
        <img src={arrow_next} id='next' onClick={switchMonth}></img>
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
      <div className="calendar-body">{generateCalendar(dateNow)}</div>
    </div>
  )
}
