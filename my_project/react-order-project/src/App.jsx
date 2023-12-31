import './App.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'
import './Calendar_another.css'
import CalendarMy from './calendar/Calendar_my'
import '../src/calendar/CalendarMy.scss'




export default function App() {
  const dateNow = new Date()
  const nameMonthNow = dateNow.toLocaleString('ru', {
    month: 'long',
  })
  const upperNameMonthNow = nameMonthNow.charAt(0).toUpperCase() + nameMonthNow.slice(1)
 
  return (
    <div className="container">
      <header>
        <div>
          <div>Тут лого или просто название</div>
          <h2>Бронирование</h2>
        </div>
        <div>тут кнопки меню</div>
      </header>
      <div className="main_container">
        <h1>Добро пожаловать!</h1>
        <section id="1">
          <div id="collapse_1">
            Забронировать столик
              {/*<
               <Calendar 
              onChange = {onChangeCalendar}
              value = {calendarValue}
               /> */}
              <CalendarMy dateNow={dateNow} name={upperNameMonthNow} />
          </div>
          <div id="collapse_2">Меню</div>
          <div id="collapse_3">Фото</div>
        </section>
      </div>
    </div>
  )
}

// export default App
