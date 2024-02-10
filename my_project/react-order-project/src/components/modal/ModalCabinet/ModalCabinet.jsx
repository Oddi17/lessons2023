import Button from '../../button/Button'
import CabinetForm from '../../form/Cabinet/CabinetForm'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react';

export default function ModalCabinet({handleBut,title}) {
    const [type,setType] = useState();
    useEffect(()=>{
        switch(title){
                case 'firstname': setType("Имя");
                break;
                case 'birth': setType("Дата рождения");
                break;
                case 'phone': setType("Телефон");
                break;
                case 'gender': setType("Пол");
                break;
            }
    },[])
    
    // useGSAP(()=>{
    //   isOpen && ()
        
    // },[])

  
  return (
        <div className='fade-cabinet'>
            <div className="modal-cabinet">
                <div className="modal-cabinet-content">
                    <Button name="close" handleClick={handleBut}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </Button>
                    <h2>{type}</h2>
                    <CabinetForm typeForm = {type}/>
                    {/* <Button  handleClick={""}>Изменить</Button> */}
                </div>   
            </div>
        </div>
      )};