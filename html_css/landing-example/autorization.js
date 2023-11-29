const $headerNav = document.querySelector('.header-nav')
const $buttondOfLoggin = $headerNav.children[0]

const data_of_user = {
  email: 'ivan@gmail.com',
  password: '&$9yst_32hd',
}

const Modal = () => {
  const modal = document.createElement('div')
  modal.className = 'modal_authorization fade'
  modal.innerHTML = `
    <div class='container'>
        <div class='content'>
        <img src=''>
        <h1>Please enter your password</h1>
        <h2>Enter your password to make this change.</h2>
        <div class='email'>
            <form>
                <label>Email or username</label>
                <input type='text' placeholder='olivia@untitledui.com'>
                <div class='hint hidden'>'Проверьте правильность введенных данных'</div>
            </form>
        </div>
        <div class='password'>
            <form>
                <label>Email or username</label>
                <input type='password' placeholder='password'>
                <div class='hint hidden'>'Проверьте правильность введенных данных'</div>
            </form>
        </div>
        </div>
        <div class='actions'>
            <div class='but cancel'>Cancel</div>
            <div class='but login'>Log in</div>
        </div>
    </div>
    `
  document.body.append(modal)

  const LogIn = (data) => {
    let words = 'Проверьте правильность введенных данных'
    let email_of_user = modal.querySelector('.email input')
    let password_of_user = modal.querySelector('.password input')
    email_of_user.classList.remove('error')
    password_of_user.classList.remove('error')
    if (data === '') return
    
    if (email_of_user.value !== data.email) {
        email_of_user.classList.add('error')
        console.log(words)
    }
    if (password_of_user.value !== data.email) {
        password_of_user.classList.add('error')
        console.log(words)
    }
    // data_of_user !== data.password ? console.log(words):
    //дальше видимо надо выключать модалку и отрисовывать вместо кнопок аватарку
  }

  const Cancel = () => {
    let $parent_of_modal = modal.parentNode
    $parent_of_modal.removeChild(modal)
    console.log('модальное окно закрыто')
  }

  const cancel = modal.querySelector('.cancel')
  const login = modal.querySelector('.login')
  cancel.addEventListener('click', () => {
    Cancel()
  })
  login.addEventListener('click', () => {
    LogIn(data_of_user)
  })
}

$buttondOfLoggin.addEventListener('click', (element) => {
  Modal()
})
