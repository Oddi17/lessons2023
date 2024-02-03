import React from 'react'
import axios from 'axios'

export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      checkEmpty(){
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

          const url = "http://localhost:8080/index.php"
          let fData = new FormData();
          fData.append('email',this.state.email)
          fData.append('password',this.state.password)
        
          // axios.post(url,fData)
          // .then(response=>alert(response.data))
          // .catch(error=>alert(error))


          fetch('http://localhost:8080/index.php', {
              method: 'POST',
              // body: formData
              // headers: { 'Content-Type': 'application/json' },
              // headers: {'Content-Type':'application/x-www-form-urlencoded'},
              //body: JSON.stringify({ 'email': '1111','password':'123Ar' })
              body: fData
          })
          .then(response => response.json())
          .then(data => console.log(data))
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
            
            <input type="submit" value="Отправить" />
        </form>
      )
    }
}