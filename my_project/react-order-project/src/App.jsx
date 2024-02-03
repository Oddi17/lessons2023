import './App.css'
import './css/authorization.css'
import { useState } from 'react'
import CalendarMy from './components/calendar/Calendar_my'
import './components/calendar/CalendarMy.scss'
import Collapsible from './components/collapse/Collapse'
import './components/collapse/Collapse.scss'

import Header from './Header'
import {Form} from './components/form/form'
import Login from './Login'
// import {BrowserRouter , Router, Routes,Route, Link} from  "react-router-dom"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {
  const dateNow = new Date()
  const nameMonthNow = dateNow.toLocaleString('ru', {
    month: 'long',
  })
  const upperNameMonthNow =
    nameMonthNow.charAt(0).toUpperCase() + nameMonthNow.slice(1)

  return (
    <div className="container">
      <Header/>
      
      
      {/* <Router>
        Swi
      </Router> */}
      <div className="main_container">
        <div className="wallpaper">
          <section id="reserv">
            <Collapsible label="Забронировать" classIn="collapse first">
              <CalendarMy dateNow={dateNow} name={upperNameMonthNow} />
            </Collapsible>
          </section>
          </div>
          <section id="about">
            <div>ЧТО-ТО! под номером 2</div>
          </section>
          <div className="wallpaper">
          <section id="menu">
            
            <Collapsible label="Меню" classIn="collapse second">
              {/* <CalendarMy dateNow={dateNow} name={upperNameMonthNow} /> */}
            </Collapsible>
          </section>
          </div>
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
        
        <Router>
          <Routes>
              <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
    </div>
  )
}

// export default App
