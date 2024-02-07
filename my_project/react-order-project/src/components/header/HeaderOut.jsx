import Button from '../button/Button'

export default function Header({onOpen}) {

    return (
        <header>
        <h2>ST.Restaurant</h2>
          <div className="nav">
            <div>О нас</div>
            <div>Отзывы</div>
            <Button handleClick={onOpen}>Войти</Button>
          </div>
      </header>
    )
}