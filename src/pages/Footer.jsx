import React from 'react';
import { useRef } from 'react';
import logo from '../img/logo2.png';

function Footer() {
    const openRegistr = useRef();

    const registr = () => {
        openRegistr.current.style.display = 'block'
    }
    const closeRegistr = () => {
        openRegistr.current.style.display = 'none'
    }
    return (
        <div className='brot'>
            <div className='foter-item'>
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="Error" />
                        <div className="item">
                            <p>Калорийность и состав</p>
                            <p>Правовая информация</p>
                        </div>
                        <p className='item_p'>Мы в соцсетях</p>
                        <div id='body'>
                            <div id="insta">
                                <p>Instagram</p>
                                <p>Telegram</p>
                                <p>Вконтакте</p>
                            </div>
                            <div id="vkon">
                                <p>Москва ул. Проспект</p>
                                <p>Вернадского 86В ( Парк Фудхол)</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p className='ostalas'>ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:</p>
                        <button id='but' onClick={registr}>Написать нам</button>
                        <div className='right_footer'>
                            <p id='sakkiz'>8 916 234 06 58</p>
                            <button id='zakasss' onClick={registr}>Заказать звонок</button>
                        </div>
                    </div>
                </div>
                <p id='bar'>Fibo Pasta Bar Все права защищены © 2023</p>
            </div>
            <div ref={openRegistr} className="clow">
                <div id='div'>
                    <div className="srov">
                        <div className="wrapper">
                            <p>Заказать звонок</p>
                            <p onClick={closeRegistr}>&times;</p>
                        </div>
                        <div className="inp">
                            <p>Номер телефона</p>
                            <input type="number" />
                        </div>
                        <div className="clow-footer">
                            <button>Заказать</button>
                            <p>
                                Продолжая, вы соглашаетесь со сбором и обработкой
                                данных и персональных соглашением пользовательским данных
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer