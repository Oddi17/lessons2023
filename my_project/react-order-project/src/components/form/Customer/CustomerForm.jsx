
import { useState } from "react"
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';

export default function CustomerForm({ulrStr}) {
    const [firstname,setFirstName] = useState('');
    const [phone,setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState(null);

    
    
    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'name') {
            setFirstName(value);
          }else if (name === 'gender') {
            setGender(value);
          }
    }
    const handleBirthdateChange = (date) => {
        setBirthdate(date);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:',firstname);
        console.log('Пол:', gender);
        console.log('Дата рождения:', birthdate);
        console.log('Телефон:', phone);

        // fetch(ulrStr, {
        //     method: 'POST',
        //     body: formData,
        //     credentials: "include",
        //   })
        //     .then((response) => response.json())
        //     .then((response)=>{
        //         if (response['code'] == 200) {
        //             setError("")
        //             setMsg(response['mes'])
        //             setTimeout(function(){
        //                 localStorage.setItem("auth",true)
        //                 localStorage.setItem("login",email)
        //                 localStorage.setItem("id",response['id'])
        //                 navigate('/page');
        //             },5000)
        //         }else{
        //           setError(response['mes'])
        //         }
        //         console.log(response)
        //     })
        //     .catch((err)=>{
        //         // setError(err)
        //         console.log(err)
        //     })

      };

    const handlePhoneChange = (value,e) => {
        setPhone(value);
      };

    return(
    <form onSubmit={handleSubmit} id="customerForm">
        <label>
            Имя
            <input type="text" required name="name" placeholder="Ваше имя" value={firstname} onChange={handleChange} />
        </label>
        <label>Дата рождения:
          <DatePicker selected={birthdate} onChange={handleBirthdateChange} dateFormat="dd.MM.yyyy" />
        </label>
        <label>
          Пол:
          <select value={gender} name="gender" onChange={handleChange}>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
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
                }}
                autoFormat={false}
                placeholder="+79851112228"/>
        </label>
        <input type="submit" value="Отправить" />
    </form>
    )
}