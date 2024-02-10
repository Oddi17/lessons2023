import Button from '../button/Button'
import Form from '../form/Login/Login'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

export default function Modal({ isOpen, butClose, butReg, isReg}) {
  const urlLog = "http://localhost:8080/login"
  const urlReg = "http://localhost:8080/reg"

    useGSAP(()=>{
      !isReg && isOpen && (
        gsap.from(".modal",{
          opacity:0,
          y:-800,
          duration:1
      }))
      isReg && isOpen &&(
        gsap.to(".modal .login",{
          x:1500,
          duration:1
      }))
      isReg && isOpen && (
        gsap.from(".modal .reg",{
          x:-1500,
          duration:1
      }))
    },[isOpen,isReg])

  
  return (
      isOpen && (
        <div className='fade'>
            <div className="modal">
                <div className="modal-content login">
                    <Button name="close" handleClick={butClose}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </Button>
                    <h2>Войти в систему</h2>
                    <Form ulrStr={urlLog} whereTo={'mainpage'} butName="Войти"/>
                    <Button name="reg" handleClick={butReg}>Зарегистрироваться</Button>
                </div>   
              { isReg && (
                <div className="modal-content reg">
                    <Button name="close" handleClick={butClose}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </Button>
                    <h2>Регистрация</h2>
                    <Form ulrStr={urlReg} whereTo={'startpage'} butName="Зарегистрироваться"/>
                 </div>
               )}
            </div>
        </div>
      ))};