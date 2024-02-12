import Button from '../button/Button'

export default function Header({onOpen}) {

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
            <Button handleClick={onOpen}>Войти</Button>
          </div>
      </header>
    )
}