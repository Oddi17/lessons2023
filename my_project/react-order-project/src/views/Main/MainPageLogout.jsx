import CalendarSamp from '../../components/calendar/CalendarMUI/CalendarSamp'
import Collapse from '../../components/collapse/Collapse'
import '../../components/collapse/Collapse.scss'
import HeaderOut from '../../components/header/HeaderOut'
import { useState } from 'react';
import Modal from '../../components/modal/Modal'

export default function MainPageLogout() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    
    return(
        <div className="container">
            <HeaderOut onOpen={openModal}/>
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
                 
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
    )
}