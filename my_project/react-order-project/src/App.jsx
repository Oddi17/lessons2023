import './App.css'
import './css/authorization.css'
import { useState } from 'react'
import CalendarMy from './components/calendar/Calendar_my'
import './components/calendar/CalendarMy.scss'
import Collapsible from './components/collapse/Collapse'
import './components/collapse/Collapse.scss'
import telegram from '/telegram.svg'
import instagram from '/instagram.svg'

export default function App() {
  const dateNow = new Date()
  const nameMonthNow = dateNow.toLocaleString('ru', {
    month: 'long',
  })
  const upperNameMonthNow =
    nameMonthNow.charAt(0).toUpperCase() + nameMonthNow.slice(1)

  return (
    <div className="container">
      <header>
        <h2>ST.Restaurant</h2>
        <div className="nav">
          <div>Мероприятия</div>
          <div>О нас</div>
          <div>Отзывы</div>
          <div>Войти</div>
        </div>
        <div className="icons">
          <span class="material-symbols-outlined">mail</span>
          <span class="material-symbols-outlined">call</span>
          <img src={telegram}></img>
          <img src={instagram}></img>
          <i class="bi bi-instagram"></i>
        </div>
      </header>
      <div className="main_container">
        <div className="wallpaper">
          <section id="first">
            {/* <Collapsible label="Introduction">
              <h1>introduction</h1>
              <p>
                The collapsible component puts long sections of the information under a
                block enabling users to expand or collapse to access its details.
              </p>
            </Collapsible> */}
            <Collapsible label="Забронировать" classIn="collapse first">
              <CalendarMy dateNow={dateNow} name={upperNameMonthNow} />
            </Collapsible>
            {/* <div>
              <CalendarMy dateNow={dateNow} name={upperNameMonthNow} />
            </div> */}
            <Collapsible label="Меню" classIn="collapse second">
              <div>КАКОЙ-ТО ТЕКСТ</div>
              <CalendarMy dateNow={dateNow} name={upperNameMonthNow} />
            </Collapsible>
            <Collapsible label="Фото" classIn="collapse third">
              <div>РАЗНЫЕ ФОТКИ</div>
            </Collapsible>
          </section>
          </div>
          <section id="second">
            <div>ЧТО-ТО! под номером 2</div>
          </section>
          <section id="third">
            <div>ЧТО-ТО! под номером 3</div>
          </section>
          {/*В общем это для модалки ЛОГИНА */}
          <div className='fade hidden'>
            <div className='modal'>
              Модалка
            </div>
          </div>
        </div>
    </div>
  )
}

// export default App
