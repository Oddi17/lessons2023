import './App.css'
import './components/modal/Modal.css'
import './components/form/Login/LoginForm.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPageLogout from './views/Main/MainPageLogout'

export default function App() {
  return (
    <div className="container">  
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPageLogout />} />
              {/* <Route path="/login" element={<Form/>}/> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
}

