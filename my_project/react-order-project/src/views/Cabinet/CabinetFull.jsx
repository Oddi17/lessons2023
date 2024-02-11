import Button from '../../components/button/Button'

export default function CabinetFull({data,handleBack,handleEdit}) {
  const loginUser = localStorage.getItem('login')

  return (
    <>
      <div className="customer-content-true">
        <h2>Пользователь: {loginUser}</h2>
        <div className="user-data">
          <div className="cell-group">
            <div className="cell name">
              <span className='title'>Имя</span>
              <div>
                <span className="name">{data.name}</span>
                <Button name="edit" handleClick={handleEdit}>
                  <span className="material-symbols-outlined pencil firstname">edit</span>
                </Button>
              </div>
            </div>
            <div className="cell birth">
              <span className='title'>Дата рождения</span>
              <div>
                <span className="name">{data.dt_birth}</span>
                <Button name="edit" handleClick={handleEdit}>
                  <span className="material-symbols-outlined pencil birth">edit</span>
                </Button>
              </div>
              
            </div>
            <div className="cell gender">
              <span className='title'>Пол</span>
              <div>
                {data.sex ? <span className="name">Муж</span> : <span className="name">Жен</span>}
                <Button name="edit" handleClick={handleEdit}>
                  <span className="material-symbols-outlined pencil gender">edit</span>
                </Button>  
              </div>
            </div>
          </div>
          <div className="cell-group">
            <div className="cell phone">
              <span className='title'>Телефон</span>
              <div>
                  <span className="name">+{data.phone}</span>
                  <Button name="edit" handleClick={handleEdit}>
                      <span className="material-symbols-outlined pencil phone">edit</span>
                  </Button>
              </div>
            </div>
            <div className="cell bonus">
              <span className='title' >Бонусы</span>
              <span className="name">{data.bonus} р.</span>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Button name="back" handleClick={handleBack}>
            На главную
          </Button>
        </div>
      </div>
    </>
  )
}
