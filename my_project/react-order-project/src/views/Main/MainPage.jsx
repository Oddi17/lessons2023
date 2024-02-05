import CalendarSamp from '../../components/calendar/CalendarMUI/CalendarSamp'
import Collapse from '../../components/collapse/Collapse'
import '../../components/collapse/Collapse.scss'
import HeaderOut from '../../components/header/HeaderOut'

export default function MainPage() {
    
    
    return(
        <div className="container">
            <HeaderOut/>
            <div className="main_container">
                    <section id="reserv">
                        <Collapse label="Забронировать" classIn="collapse first">
                            <CalendarSamp/>
                        </Collapse>
                    </section>
                <section id="about">
                    <div>ЧТО-ТО! под номером 2</div>
                </section>
                <div className="wallpaper">
                    <section id="menu">
                        <Collapse label="Меню" classIn="collapse second">
                            {/* какой-то контент другой  */}
                            TEXT
                            TEXT 
                            TEXT
                        </Collapse>    
                    </section>
                </div>
                <section id="third">
                    <div>ЧТО-ТО! под номером 3</div>
                 </section>
                 <div className='fade hidden'>
            </div>
            <div className='modal'>
                Модалка
            </div>
          </div>
        </div>



    )
}