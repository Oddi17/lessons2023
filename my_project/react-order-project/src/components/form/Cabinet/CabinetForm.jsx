import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';

export default function CabinetForm({typeForm}){

    const navigate = useNavigate();
    const [data,setData] = useState('');
    const [datePicker,setDatePicker] = useState(null);
    const [msg,setMsg] = useState('');
    const [error,setError] = useState('');
    const ulrStr = "http://localhost:8080/update"

    let formNeed = null

    useEffect(()=>{
      setTimeout(function(){
          setMsg("")
      },4000)
    },[msg])
       
    const handleBirthdateChange = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Добавляем ведущий ноль, если число меньше 10
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formatDate = `${formattedDay}/${formattedMonth}/${year}`;
        setData(formatDate);
        setDatePicker(date);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
            setData(value);
    };  

    const handlePhoneChange = (value) => {
        setData(value);
    }; 

    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('data', data);
        formData.append('id',localStorage.getItem('id'))
        event.preventDefault();

        return
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
                    // console.log('yes')
                    navigate('/cab')
                  }else{
                    setError(response['mes'])
                  }
                  console.log(response)
            })
            .catch((err)=>{
              // setError(err)
                console.log(err)
            })
      };

      if (typeForm === "Имя") {
        formNeed = 
                    <input 
                        type="text" 
                        required 
                        name="name" 
                        value={data}
                        onChange={handleChange} />
          
      }else if (typeForm === "Дата рождения") {
        formNeed = 
                <DatePicker 
                    selected={datePicker} 
                    name="dt_birth"
                    onChange={handleBirthdateChange}
                    peekNextMonth 
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    dateFormat="dd.MM.yyyy" />
        
      }else if (typeForm === "Пол"){
        formNeed =    
                    <select value={data} name="sex" onChange={handleChange}>
                        <option value=""></option>
                        <option value="true">Мужской</option>
                        <option value="false">Женский</option>
                    </select>
             

      }else if (typeForm === "Телефон") {
        formNeed =   
                    <PhoneInput
                        country={'ru'}
                        name = 'phone'
                        value={data}
                        onChange={handlePhoneChange}
                        inputProps={{
                            pattern: '\\+7[0-9]{10}',
                            required: true,
                            maxlength: "12"
                        }}
                        autoFormat={false}
                        placeholder="+79851112228"/>
            
      }

    return(
        <form onSubmit={handleSubmit} id="cabinetForm">
            {formNeed}
            <p>
                {  
                error !== "" ?
                <span className='error'> {error} </span> :
                <span className='success'> {msg} </span>
                }
            </p>
        <input type="submit" value="Изменить" />
    </form>
    )
}