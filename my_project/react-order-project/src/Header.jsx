import telegram from '/telegram.svg'
import instagram from '/instagram.svg'
import {BrowserRouter as Link} from 'react-router-dom'

export default function Header() {

    return (
        <header>
        <h2>ST.Restaurant</h2>
        
        <div className="icons">
          <div className="nav">
            <div>О нас</div>
            <div>Отзывы</div>
            <div>Войти</div>
            <a href = "/login">ВОЙТИ </a>

            {/* <Link to ="/login">Войти</Link>
            <Link to ="/about">О нас</Link>
            <Link to ="/reviews">Отзывы</Link> */}
          </div>

          <span className="material-symbols-outlined">mail</span>
          <span className="material-symbols-outlined">call</span>
          <img src={telegram}></img>
          <img src={instagram}></img>
          <i className="bi bi-instagram"></i>
        </div>
      </header>
    )
}