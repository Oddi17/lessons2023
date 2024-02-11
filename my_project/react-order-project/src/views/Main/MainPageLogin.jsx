import Collapse from '../../components/collapse/Collapse'
import '../../components/collapse/Collapse.scss'
import HeaderIn from '../../components/header/HeaderIn'
import Footer from '../../components/footer/Footer' 
import '../../components/footer/Footer.css' 


export default function MainPageLogin() {
    return(
        <div className="container">
            <HeaderIn/>
            <div className="main_container">
                    <section id="reserv">
                        <Collapse label="Забронировать" classIn="collapse first">
                            {/* <CalendarSamp/> */}
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
            </div>
            <Footer />
          </div>
    )
}