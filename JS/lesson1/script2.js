let password = prompt("passrword:")
let status_user = prompt("how are you?")
if (password === '123532') {
    
    if (status_user ==='admin') {
        console.log('Добро пожаловать, администратор!')
    }else {
            console.log('Добро пожаловать')
        }
}else{
    console.log('Пароль не верный, вы не авторизованы')
}
