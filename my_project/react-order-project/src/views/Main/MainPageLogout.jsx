// import CalendarSamp from '../../components/calendar/CalendarMUI/CalendarSamp'
import Collapse from '../../components/collapse/Collapse'
import '../../components/collapse/Collapse.scss'
import HeaderOut from '../../components/header/HeaderOut'
import { useState } from 'react';
import Modal from '../../components/modal/Modal'
import Footer from '../../components/footer/Footer' 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPageLogout() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isReg,setReg] = useState(false);

    const navigate = useNavigate()

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setReg(false);
    };
    const switchModalContent = () => {
        setReg(true);
    }


    useEffect(()=>{
        let login = localStorage.getItem("login")
        if (login){
          navigate("/in")
        }
      },[])
    
    return(
        <div className="container">
            <HeaderOut onOpen={openModal}/>
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
            <Modal 
                isOpen={isModalOpen} 
                butClose={closeModal} 
                isReg ={isReg}
                butReg={switchModalContent} 
            />
          </div>
    )
}