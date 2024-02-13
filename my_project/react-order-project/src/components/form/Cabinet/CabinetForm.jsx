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
    let type = ""

    useEffect(()=>{
      setTimeout(function(){
          setMsg("")
      },4000)
    },[msg])
       
    const handleBirthdateChange = (date) => {
        setData(date.toLocaleString('ru-RU'));
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
        formData.append('column',type)
        event.preventDefault();
        fetch(ulrStr, {
            method: 'POST',
            body: formData,
            credentials: "include"
          })
            .then((response) => response.json())
            .then((response)=>{
                  if (response['res'] == 200) {
                    setError("")
                    setMsg(response['mes'])
                    window.location.reload()
                  }else{
                    setError(response['mes'])
                  }
                  console.log(response)
            })
            .catch((err)=>{
                setError(err)
                console.log(err)
            })
      };

      if (typeForm === "Имя") {
        type = "name"
        formNeed = 
                    <input 
                        type="text" 
                        required 
                        name="name" 
                        value={data}
                        onChange={handleChange} />
          
      }else if (typeForm === "Дата рождения") {
        type = "dt_birth"
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
        type = "sex"
        formNeed =    
                    <select value={data} name="sex" onChange={handleChange}>
                        <option value=""></option>
                        <option value="true">Мужской</option>
                        <option value="false">Женский</option>
                    </select>
             

      }else if (typeForm === "Телефон") {
        type = "phone"
        formNeed =   
                    <PhoneInput
                        country={'ru'}
                        name = 'phone'
                        value={data}
                        onChange={handlePhoneChange}
                        inputProps={{
                            pattern: '\\+7[0-9]{10}',
                            required: true,
                            maxLength: "12"
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