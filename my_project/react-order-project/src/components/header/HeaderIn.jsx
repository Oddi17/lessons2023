import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'


export default function Header() {

    const navigate = useNavigate()
    const logoutSubmit = () =>{
        
        const urlLogout = "http://localhost:8080/logout"
        // localStorage.clear()
        // window.location.reload()
        navigate("/")
        fetch(urlLogout,{
          method: 'GET'
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((err)=>{
          console.log(err)
        })
        localStorage.setItem("login","")
    }

    return (
        <header>
        <h2>ST.Restaurant</h2>
          <div className="nav">
            <div>О нас</div>
            <div>Отзывы</div>
            {/* <div>Баланс</div> */}
            <div>Личный кабинет</div>
            {/* <div>Выйти</div> */}
            <Button handleClick={logoutSubmit}>Выйти</Button>
            {/* <Button handleClick={}>Выйти</Button> */}
            
          </div>
      </header>
    )
}