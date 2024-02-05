import Button from '../button/Button'
import {Form} from '../form/Login/LoginForm'

export default function Modal({ isOpen, onClose }) {
    return (
      isOpen && (
        <div className='fade'>
            <div className="modal">
                <div className="modal-content">
                    <h2>Войти в систему</h2>
                    <Form />
                    <Button handleClick={onClose}>Закрыть</Button>
                </div>
            </div>
        </div>
      )
    );
  };