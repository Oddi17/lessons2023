import Collapse from '../../components/collapse/Collapse'
import '../../components/collapse/Collapse.scss'
import HeaderIn from '../../components/header/HeaderIn'
import Footer from '../../components/footer/Footer' 
import '../../components/footer/Footer.css' 
import OrderMain from '../../components/order/OrderMain'
import img_about from '/about.jpg'
import menu_1 from '/menu-1.jpg'
import menu_2 from '/menu-2.jpg'
import menu_3 from '/menu-3.jpg'
import menu_4 from '/menu-4.jpg'
import menu_5 from '/menu-5.jpg'
import ImageSlider from '../../components/slider/ImageSlider'




export default function MainPageLogin() {
    const images = [menu_1, menu_2, menu_3,menu_4,menu_5];
    return(
        <div className="container">
            <HeaderIn/>
            <div className="main_container"></div>
                <section id="preview">
                    <div className='preview-logo-container'>
                            <h1>ST.Restaurant</h1>
                    </div>
                </section>
                <section id="about">
                    <h2 className='--title'>О РЕСТОРАНЕ</h2>
                    <div className='about --container'>
                        <div className='about --text'>
                            <p>
                                <span>
                                    Добро пожаловать в наш уютный ресторан, где каждый день 
                                    мы создаем волшебство в каждом блюде. Наши опытные шеф-повара 
                                    с любовью готовят изысканные блюда, вдохновленные мировыми 
                                    кулинарными традициями.
                                </span>
                            </p>
                            <p>
                                <span> 
                                    ST.Restaurant - место, где встречается 
                                    утонченная кухня, стильный интерьер и неповторимая атмосфера 
                                    гостеприимства.
                                </span>
                            </p>
                        </div>
                        <div className='about-image'>
                            <img src={img_about}/>
                        </div>
                    </div>
                </section>
                <section id="reserv">
                    <div className='reserv-container'>
                        <Collapse label="Бронирование" classIn="collapse first">
                                <span>Выберите дату и время</span>
                                <OrderMain></OrderMain>
                        </Collapse>  
                    </div>   
                </section>
                <section id="menu">
                     <h2 className='--title'>МЕНЮ</h2>
                    <div className='menu --container'>
                        <div className='menu --text'>
                            <p>
                                <span>
                                    Наше меню представляет собой гармонию вкусов и ингредиентов, 
                                    тщательно подобранных для удовлетворения даже самых изысканных гурманов. 
                                    От свежих морепродуктов до изысканных мясных блюд, каждое блюдо приготовлено 
                                    с использованием высококачественных продуктов.
                                </span>
                            </p>
                        </div>
                        <div className='menu-image'>
                                <ImageSlider  images={images}/>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    )
}