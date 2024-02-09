import './App.css'
import './components/modal/Modal.css'
import './components/form/Login/LoginForm.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPageLogout from './views/Main/MainPageLogout'
import MainPageLogin from './views/Main/MainPageLogin'
import Cabinet from './views/Cabinet/Cabinet';
import CabinetCrup from './views/Cabinet/CabinetCrup'
import './views/Cabinet/Cabinet.css'
import './views/Cabinet/CabinetCrup.css'
import Protected from './components/protected/Protected';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import CustomerForm from './components/form/Customer/CustomerForm'
import './App.css'

// import './components/form/Customer/CustomerForm.css'


export default function App() {
  return (
    <div className="container">  
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPageLogout />} />
              {/* <Route path="/in" element={<MainPageLogin />} /> */}
              <Route path="/page" element={<Protected Component= {MainPageLogin} />} />
              {/* <Route path="/login" element={<Form/>}/> */}
              <Route path="/cab" element={<Cabinet />} />
              <Route path="/cabcrup" element={<CabinetCrup />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

