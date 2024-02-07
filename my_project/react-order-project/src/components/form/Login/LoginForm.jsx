import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.Url = this.props.ulrStr;
      }
      

      redir = (data) => {
        //const navigate = useNavigate();
        
        console.log(data)
        React.useEffect(_ => {
          if (data['code']==200) navigate('/main')
        }, [data['code']==200])



        // if (data['code']==200){
          
        //   console.log('ura!')
        //   // setTimeout(function(){
        //   //   navigate("/main")
        //   // },3000)
        //   navigate("/in")
        // }

    }


      checkEmpty =()=>{
        let email = this.state.email
        let password = this.state.password
        let flag = (email.length === 0 || password.length === 0) ? true: false
        console.log(flag,email,password)
        return flag
      }

      handleChange = (event) => {
        const target = event.target;
        this.setState({
          [target.name]:target.value
        });
      } 

      handleSubmit = (event) => {
        if(this.checkEmpty()) {
          alert("Поля не заполнены!")
          event.preventDefault();
        }else{
          
          // event.preventDefault();
          
          // let fData = new FormData();
          // fData.append('email',this.state.email)
          // fData.append('password',this.state.password)

          // const url = "http://localhost:8080/index.php"
          // const url = "http://localhost:8080/login"

          let fData = new FormData();
          fData.append('email',this.state.email)
          fData.append('password',this.state.password)
        
          // axios.post(url,fData)
          // .then(response=>alert(response.data))
          // .catch(error=>alert(error))


          fetch(this.Url, {
              method: 'POST',
              // body: formData
              // headers: { 'Content-Type': 'application/json' },
              // headers: {'Content-Type':'application/x-www-form-urlencoded'},
              //body: JSON.stringify({ 'email': '1111','password':'123Ar' })
              body: fData
          })
          .then(response => response.json())
          .then(data => this.redir(data))
          .catch(error=>alert(error))
          
          



            event.preventDefault();
        }
      }

      render() {
        return (
        <form onSubmit={this.handleSubmit} id="myForm">
            <label>Логин</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
            />
    
            <label>Пароль</label>
            <input 
              type="text" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
            />
            
            <input type="submit" value="Войти" />
        </form>
      )
    }
}