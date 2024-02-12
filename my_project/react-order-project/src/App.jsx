import './App.css'
import './components/modal/Modal.css'
import './components/form/Login/Login.css'
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
import './App.css'
import './components/modal/ModalCabinet/ModalCabinet.css'



export default function App() {
  return (
    <div className="container">  
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPageLogout />} />
              <Route path="/page" element={<Protected Component= {MainPageLogin} />} />
              {/* <Route path="/cab" element={<Cabinet />} /> */}
              <Route path="/cab" element={<Protected Component= {Cabinet} />} />
              <Route path="/cab/creat" element={<CabinetCrup type={'create'}/>} />
              <Route path="/cab/update" element={<CabinetCrup type={'update'}/>} />
              
          </Routes>
      </BrowserRouter>
    </div>
  )
}

