import { useNavigate } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useEffect,useState } from "react"

import CabinetEmpty from './CabinetEmpty'
import CabinetFull from './CabinetFull'
import ModalCabinet from '../../components/modal/ModalCabinet/ModalCabinet'

export default function Cabinet() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [titleBut,setTitleBut] = useState(null);
    const navigate = useNavigate()
    // const [isUser,setIsUser] = useState(false)
    const [dataUser,setDatauser] = useState(null)
    const idUser = localStorage.getItem("id")
    const urlCheck = 'http://localhost:8080/user?id=' + idUser
    
    const openModal = (event) => {
        setModalOpen(true);
        const strType = event.target.classList[2]
        setTitleBut(strType)
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setTitleBut(null)
    };
    
    useEffect(()=>{
            fetch(urlCheck)
            .then((response)=>response.json())
            .then((response)=>{
                if (response['res'] == 200) {
                    // setIsUser(true)
                    setDatauser(response['data'][0])
                }
            })
            .catch((err)=>console.log(err))
        },[])
    
        
    useGSAP(()=>{
        gsap.from(".customer-container",{
            scale:0,
            duration:1
        })
    },[])

    const toCreate = () => {
        navigate('/cab/creat')
    }
    const toUpdate = () => {
        navigate('/cab/update')
    }
    const back = () => {
        navigate("/page")
    }
    return (
        <>
        <div className="customer-container"> 
            { dataUser === null ? null : 
                (dataUser ?   
                <CabinetFull data={dataUser} handleCrup={toUpdate} handleBack={back} handleEdit={openModal} ></CabinetFull>  : 
                <CabinetEmpty handleCrup={toCreate} handleBack={back}></CabinetEmpty>)
            }   
        </div>
        {isModalOpen && (<ModalCabinet title={titleBut} handleBut = {closeModal} />)}
        </>    
    )
}