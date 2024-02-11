
import { useEffect,useState } from "react"
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';
import { useNavigate } from "react-router-dom";

export default function CustomerForm({ulrStr}) {
    const navigate = useNavigate();
    const [firstname,setFirstName] = useState('');
    const [phone,setPhone] = useState('');
    const [gender, setGender] = useState(true);
    const [selectedBirthdate, setSelectedBirthdate] = useState(null);
    const [birthdate, setBirthdate] = useState(null);
    const [error,setError] = useState('');
    const [msg,setMsg] = useState('');


    useEffect(()=>{
      setTimeout(function(){
          setMsg("")
      },4000)
    },[msg])
    
    
    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'name') {
            setFirstName(value);
          }else if (name === 'gender') {
            setGender(value);
          }
    };
    
    const handleBirthdateChange = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Добавляем ведущий ноль, если число меньше 10
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formatDate = `${formattedDay}/${formattedMonth}/${year}`;
        // const formatDate = `${year}-${formattedMonth}-${formattedDay}`;
        setSelectedBirthdate(date);
        setBirthdate(formatDate);

    };

    const handlePhoneChange = (value) => {
        setPhone(value);
    };  

    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('name', firstname);
        formData.append('phone', phone);
        formData.append('gender', gender);
        formData.append('birthdate', birthdate);
        formData.append('id',localStorage.getItem('id'))
        event.preventDefault();
        // console.log('Name:',firstname);
        // console.log('Пол:', gender);
        // console.log('Дата рождения:', birthdate);
        // console.log('Телефон:', phone);
        
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

    

    return(
    <form onSubmit={handleSubmit} id="customerForm">
        <label>
            Имя
            <input 
              type="text" 
              required 
              name="name" 
              placeholder="Ваше имя" 
              value={firstname} 
              onChange={handleChange} />
        </label>
        <label>Дата рождения:
          <DatePicker 
            // showIcon
            selected={selectedBirthdate} 
            onChange={handleBirthdateChange}
            peekNextMonth 
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            dateFormat="dd.MM.yyyy" />
        </label>
        <label>
          Пол:
          <select value={gender} name="gender" onChange={handleChange}>
            <option value="true">Мужской</option>
            <option value="false">Женский</option>
          </select>
        </label>
        <label>
          Телефон:
          <PhoneInput
                country={'ru'}
                value={phone}
                onChange={handlePhoneChange}
                inputProps={{
                    pattern: '\\+7[0-9]{10}',
                    required: true,
                    maxlength: "12"
                }}
                autoFormat={false}
                placeholder="+79851112228"/>
        </label>
        <p>
        {  
          error !== "" ?
          <span className='error'> {error} </span> :
          <span className='success'> {msg} </span>
        }
      </p>
        <input type="submit" value="Отправить" />
    </form>
    )
}