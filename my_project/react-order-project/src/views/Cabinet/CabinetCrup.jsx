import CustomerForm from '../../components/form/Customer/CustomerForm'
import Button from '../../components/button/Button'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom';

export default function CabinetCrup(){
    // const urlCr = "http://localhost:8080/"
    // const urlUp = "http://localhost:8080/"

    const navigate = useNavigate();


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
            <CustomerForm ulrStr={''} />
            <div className='buttons'>
                <Button  handleClick={handleBack}>
                    Назад
                </Button>
            </div>
        </div>

    )
}