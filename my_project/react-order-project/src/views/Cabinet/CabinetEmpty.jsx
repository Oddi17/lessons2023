import Button from '../../components/button/Button'
import sad from '/sad.png'

export default function CabinetEmpty({handleCrup,handleBack}) {

  
  return (
    <>
      <div className="customer-content-false">
        <span>Пользователя пока нет...</span>
        <img src={sad}></img>
        <div className="buttons-false">
          <Button name="create" handleClick={handleCrup}>
            Создать
            <span className="material-symbols-outlined">add</span>
          </Button>
          <Button name="back" handleClick={handleBack}>
            На главную
          </Button>
        </div>
      </div>
    </>
  )
}
