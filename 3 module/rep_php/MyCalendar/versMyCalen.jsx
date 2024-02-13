// import {Form} from './components/form/Login/LoginForm'

//не подключены никакие библиотеки
export default function App() {

    const dateNow = new Date()
    const nameMonthNow = dateNow.toLocaleString('ru', {
        month: 'long',
      })
      const upperNameMonthNow =
        nameMonthNow.charAt(0).toUpperCase() + nameMonthNow.slice(1)
    
      return (
        <Collapsible label="Забронировать" classIn="collapse first">
              <CalendarMy dateNow={dateNow} name={upperNameMonthNow} />
        </Collapsible>
      )
}