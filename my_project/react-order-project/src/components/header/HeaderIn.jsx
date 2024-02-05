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
          </div>

          <span className="material-symbols-outlined">mail</span>
          <img src={telegram}></img>
          <img src={instagram}></img>
          <i className="bi bi-instagram"></i>
        </div>
      </header>
    )
}