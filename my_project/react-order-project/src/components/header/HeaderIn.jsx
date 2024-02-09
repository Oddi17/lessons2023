import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'


export default function Header() {

    const navigate = useNavigate()

    const logoutSubmit = () =>{
        const urlLogout = "http://localhost:8080/logout"
        localStorage.clear()
        window.location.reload() //обновление страницы
        // localStorage.setItem("login","")
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

    return (
        <header>
        <h2>ST.Restaurant</h2>
          <div className="nav">
            <div>О нас</div>
            <div>Отзывы</div>
            <Button handleClick={cabinet}>Личный кабинет</Button>
            <Button handleClick={logoutSubmit}>Выйти</Button>
          </div>
      </header>
    )
}