import DatePicker from 'react-datepicker';
import { useEffect,useState } from "react"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import ru from 'date-fns/locale/ru';
import { addMonths } from 'date-fns';

export default function CalendarForm() {

    const ulrStr = "http://localhost:8080/order"
    const firstDate = (new Date(new Date().setHours(9, 30, 0))).toLocaleString('ru-RU');

    const [datetime,setDatetime] = useState(firstDate);
    const [selectedDate, setSelectedDate] = useState(new Date(new Date().setHours(9, 30, 0)));
    const [error,setError] = useState('');
    const [msg,setMsg] = useState('');

    useEffect(()=>{
        setTimeout(function(){
            setMsg("")
        },4000)
      },[msg])

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setDatetime(date.toLocaleString('ru-RU'));
    };

    const handleSubmit = (event) => {
        if (!localStorage.getItem('auth')){
          alert('Чтобы произвести бронирование необходимо войти на сайт')
          return
        }
        const formData = new FormData();
        formData.append('orderdate', datetime);
        formData.append('id',localStorage.getItem('id'))

        event.preventDefault();

        fetch(ulrStr, {
            method: 'POST',
            body: formData,
            credentials: "include",
          })
            .then((response) => response.json())
            .then((response)=>{
                  if (response['res'] == 200) {
                    setError("")
                    setMsg(response['mes'])
                  }else{
                    setError(response['mes'])
                  }
                  console.log(response)
            })
            .catch((err)=>{
              // setError(err)
                console.log(err)
            })
    }
    return (
      <>
        <form onSubmit={handleSubmit} id="calendarform">
          
            <DatePicker 
                showIcon
                selected={selectedDate} 
                onChange={handleDateChange}
                showTimeSelect
                peekNextMonth 
                minDate={new Date()}
                maxDate={addMonths(new Date(), 3)}
                showYearDropdown
                showMonthDropdown
                excludeTimes={[
                    setHours(setMinutes(new Date(), 0), 24),
                    setHours(setMinutes(new Date(), 30), 24),
                    setHours(setMinutes(new Date(), 0), 1),
                    setHours(setMinutes(new Date(), 30), 1),
                    setHours(setMinutes(new Date(), 0), 2),
                    setHours(setMinutes(new Date(), 30), 2),
                    setHours(setMinutes(new Date(), 0), 3),
                    setHours(setMinutes(new Date(), 30), 3),
                    setHours(setMinutes(new Date(), 0), 4),
                    setHours(setMinutes(new Date(), 30), 4),
                    setHours(setMinutes(new Date(), 0), 5),
                    setHours(setMinutes(new Date(), 30), 5),
                    setHours(setMinutes(new Date(), 0), 6),
                    setHours(setMinutes(new Date(), 30), 6),
                    setHours(setMinutes(new Date(), 0), 7),
                    setHours(setMinutes(new Date(), 30), 7),
                    setHours(setMinutes(new Date(), 0), 8),
                    setHours(setMinutes(new Date(), 30), 8),
                    setHours(setMinutes(new Date(), 0), 23),
                    setHours(setMinutes(new Date(), 30), 23)
                  ]}
                // inline
                locale = {ru}
                dropdownMode="select"
                // dateFormat="dd.MM.yyyy hh:mm" 
                dateFormat="Pp"
                timeIntervals={30}
                placeholderText=""
                onKeyDown={(e) => {
                  e.preventDefault();
               }}
            />
            <p>
            {  
            error !== "" ?
            <span className='error'> {error} </span> :
            <span className='success'> {msg} </span>
            }
          </p>
            <input type="submit" value="Забронировать" />
        </form>
        
      </>
    )
}