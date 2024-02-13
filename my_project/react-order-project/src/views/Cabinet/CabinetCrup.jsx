import CustomerForm from '../../components/form/Customer/CustomerForm'
import Button from '../../components/button/Button'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom';

export default function CabinetCrup(){

    const navigate = useNavigate();
    const urlCrup = "http://localhost:8080/create"
   
    const handleBack = () => {
        navigate('/cab')
    }

    useGSAP(()=>{
        gsap.from(".crup-container",{
            scale:0,
            duration:1
        })
    },[])

    return(
        <div className="crup-container">
            <h2>Создание данных пользователя</h2>
            <CustomerForm ulrStr={urlCrup} />
            <div className='buttons'>
                <Button  handleClick={handleBack}>
                    Назад
                </Button>
            </div>
        </div>

    )
}