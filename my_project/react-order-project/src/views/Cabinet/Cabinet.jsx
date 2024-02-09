import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { useEffect } from "react"
import sad from '/sad.png'

export default function Cabinet() {
    const navigate = useNavigate()
    let isUser = false
    const loginUser = localStorage.getItem("login")

    useEffect(()=>{
            const idUser = localStorage.getItem("id")
            const urlCheck = 'http://localhost:8080/user?id=' + idUser
            fetch(urlCheck)
            .then((response)=>response.json())
            .then((response)=>{
                isUser = response['res'] == 200 ? true : false;
                console.log(isUser)
            })
            .catch((err)=>console.log(err))
        },[])

    useGSAP(()=>{
        gsap.from(".customer-container",{
            scale:0,
            duration:1
        })
    },[])

    const toCrup = () => {
        navigate('/cabcrup')
    }

    const back = () =>{
        navigate("/page")
    }
    return (
        <div className="customer-container"> 
            {/* <div>
                Создать 
                <Form> в случае регистрации профиля</Form> 
            </div> */}
            { !isUser ? (<div className="customer-content-true">
                <h2>Пользователь: {loginUser}</h2>
                <div className='user-data'>
                    <div className='cell-group'>
                        <div className = "cell">
                            <span>Имя</span>
                            <span> Майкл</span>
                        </div>
                        <div className = "cell">
                            <span>Дата рождения</span>
                            <span>12.05.1989</span>
                        </div>
                        <div className = "cell">
                            <span>Пол</span>
                            <span>Муж</span>
                        </div>
                    </div>
                    <div className='cell-group'>
                        <div className = "cell">
                            <span>Телефон</span>
                            <span>+7989231411</span>
                        </div>
                        <div className = "cell">
                            <span>Бонусы</span>
                            <span> 0 р.</span>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <Button handleClick={toCrup}>
                        Изменить
                        <span className="material-symbols-outlined">add</span>
                    </Button>
                    <Button name="back" handleClick={back}>
                        На главную
                    </Button>
                </div>
            </div>) :
                (<div className="customer-content-false">
                    <span>Пользователя пока нет...</span>
                    <img src={sad}></img>
                    <div className='buttons-false'>
                        <Button handleClick={toCrup}>
                            Создать 
                            <span className="material-symbols-outlined">add</span>
                        </Button>
                        <Button name="back" handleClick={back}>
                            На главную
                        </Button>
                    </div>
                </div>
            )}
        </div>

        
    )
}