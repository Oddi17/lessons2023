import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'


export default function Header() {

    const navigate = useNavigate()

    const logoutSubmit = () =>{
        const urlLogout = "http://localhost:8080/logout"
        localStorage.clear()
        window.location.reload() //обновление страницы
        navigate("/")
        fetch(urlLogout,{
          method: 'GET',
          credentials: "include",
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((err)=>{
          console.log(err)
        })  
    }
    const cabinet = () =>{
      navigate("/cab")
    }

    const scrollToBlock = (elem) => {
      const targetBlock = document.getElementById(elem);
      if (targetBlock) {
        targetBlock.scrollIntoView({ behavior: 'smooth' });
      }
    };


    return (
        <header>
        <h2>ST.Restaurant</h2>
          <div className="nav">
            <Button handleClick={()=>scrollToBlock('about')}>О нас</Button>
            <Button handleClick={()=>scrollToBlock('reserv')}>Забронировать</Button>
            <Button handleClick={()=>scrollToBlock('menu')}>Меню</Button>
            <Button handleClick={cabinet}>Личный кабинет</Button>
            <Button handleClick={logoutSubmit}>Выйти</Button>
          </div>
      </header>
    )
}