import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

export default function Cabinet() {
    //let perem  = // о наличии пользователя в базе, возможно сохранять в локалстораже, после логина в 
    const navigate = useNavigate()

    useGSAP(()=>{
        gsap.from(".customer-container",{
            // opacity:0,
            scale:0,
            duration:1
        })
    },[])

    const create = () => {

    }
    const change = () => {

    }
    const back = () =>{
        navigate("/page")
    }
    return (
        <div className="customer-container">

            {/* <Button handleClick={create}>
                Создать 
                <span className="material-symbols-outlined">add</span>
            </Button> */}
                
            {/* <div className="but">Создать</div> */}
            {/* <div>
                Создать 
                <Form> в случае регистрации профиля</Form> 
            </div> */}
            
            {/* дата рождения, имя, телефон, бонусы, пол, еще логин тут указать */}
            <div className="customer-content">
                <h2>Пользователь: email</h2>
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
                    <Button handleClick={change}>
                        Изменить
                        <span className="material-symbols-outlined">add</span>
                    </Button>
                    <Button name="back" handleClick={back}>
                        На главную
                    </Button>
                </div>
                
            </div>
            

        </div>

        
    )
}