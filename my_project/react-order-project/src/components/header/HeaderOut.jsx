import telegram from '/telegram.svg'
import instagram from '/instagram.svg'
import Button from '../button/Button'

export default function Header({onOpen}) {

    return (
        <header>
        <h2>ST.Restaurant</h2>
        
        <div className="icons">
          <div className="nav">
            <div>О нас</div>
            <div>Отзывы</div>
            <Button handleClick={onOpen}>Войти</Button>
            {/* <div>Войти</div> */}
          </div>
          <span className="material-symbols-outlined">mail</span>
          <img src={telegram}></img>
          <img src={instagram}></img>
          <i className="bi bi-instagram"></i>
        </div>
      </header>
    )
}