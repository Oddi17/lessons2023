import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const [msg,setMsg] = useState('');

  const Url = props.ulrStr;
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(function(){
        setMsg("")
    },4000)
  },[msg])


  const checkEmpty = () => {
    const flag = email.length === 0 || password.length === 0;
    return flag;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkEmpty()) {
      alert('Поля не заполнены!');
    } else {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      fetch(Url, {
        method: 'POST',
        body: formData,
        credentials: "include",
      })
        .then((response) => response.json())
        .then((response)=>{
            if (response['code'] == 200) {
                setError("")
                setMsg(response['mes'])
                setTimeout( function() {
                    if (props.whereTo === "mainpage"){
                        localStorage.setItem("auth",true)
                        localStorage.setItem("login",email)
                        localStorage.setItem("id",response['id'])
                        setPassword("")
                        navigate("/page")
                    } else if (props.whereTo === "startpage") {
                      navigate("/",{replace:true})
                      window.location.reload()
                    }
                },3000)
            }else{
              setError(response['mes'])
            }
            console.log(response)
        })
        .catch((err)=>{
            // setError(err)
            console.log(err)
        })
    }};

  return (
    <form onSubmit={handleSubmit} id="myForm">
      <label>Логин</label>
      <input type="email" name="email" value={email} onChange={handleChange} />
      <label>Пароль</label>
      <input type="password" name="password" value={password} onChange={handleChange} />
      <p>
        {  
          error !== "" ?
          <span className='error'> {error} </span> :
          <span className='success'> {msg} </span>
        }
      </p>
      <input type="submit" value={props.butName} />
    </form>
  );
};

