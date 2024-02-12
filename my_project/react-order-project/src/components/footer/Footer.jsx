import telegram from '/telegram.svg'
import instagram from '/instagram.svg'


export default function Footer(){
    return(
        <div className="footer">
            <div className="icons">
                <span className="material-symbols-outlined">mail</span>
                <img src={telegram}></img>
                <img src={instagram}></img>
                <i className="bi bi-instagram"></i>
            </div>  
             
            <span>г. Санкт-Петербруг, ул. Влада-Великого, д. 17</span>
        </div>


    )
}