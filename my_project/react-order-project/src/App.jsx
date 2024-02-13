import './App.css'
import './components/modal/Modal.css'
import './components/form/Login/Login.css'
import './views/Cabinet/Cabinet.css'
import './views/Cabinet/CabinetCrup.css'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import './components/modal/ModalCabinet/ModalCabinet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPageLogout from './views/Main/MainPageLogout'
import MainPageLogin from './views/Main/MainPageLogin'
import Cabinet from './views/Cabinet/Cabinet';
import CabinetCrup from './views/Cabinet/CabinetCrup'
import Protected from './components/protected/Protected';


export default function App() {
  return (
    <div className="container">  
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPageLogout />} />
              <Route path="/page" element={<Protected Component= {MainPageLogin} />} />
              <Route path="/cab" element={<Protected Component= {Cabinet} />} />
              <Route path="/cab/create" element={<Protected Component= {CabinetCrup} />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

