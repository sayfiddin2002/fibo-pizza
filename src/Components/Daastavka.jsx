import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { NavLink } from 'react-router-dom';

function Daastavka() {
    const open = useRef();
    const adress = useRef();
    const formRef = useRef();
    const vrem = useRef();
    const [times, setTimes] = useState('Побыстрее');


    const closeTime = (time) => {
        setTimes(time)
        closeVrem()
    }

    const kuda = () => {
        open.current.style.display = 'block'
    }
    const close = () => {
        open.current.style.display = 'none'
    }

    const openAdress = () => {
        adress.current.style.display = 'block'
        open.current.style.display = 'none'

    }
    const closeAddress = () => {
        adress.current.style.display = 'none'
    }

    const openVrem = () => {
        vrem.current.style.display = 'block'
    }
    const closeVrem = () => {
        vrem.current.style.display = 'none'
    }

    const [text, setText] = useState()
    const handleSubmit = (e) => {
        adress.current.style.display = 'none'
        e.preventDefault()
        let title = {
            text: `${e.target[0].value},
             ${e.target[1].value}, 
             ${e.target[2].value}, 
             ${e.target[3].value},
             ${e.target[4].value},
             ${e.target[5].value},
             ${e.target[6].value}`
        }
        setText(title.text)
    }

    const [becor, setBecor] = useState(false);
    const imya = document.querySelector('#imya');
    const telef = document.querySelector('#telef');
    const black = document.querySelector('.black');
    const pobist = document.querySelector('.pobist');
    const zbz = useRef();

    const ofarmit = () => {

        console.log(imya.value);
        if (imya.value !== null && black.length !== null && telef.value !== 0 && pobist !== null) {
            zbz.current.style.display = 'block'
        } else {
            zbz.current.style.display = 'none'
        }

    }
    return (
        <div className='dastavke'>

            <div className="corzina_headerr">
                <div className="item_one">
                    <div className="one">
                        <p>1</p>
                    </div>
                    <p className="text">Корзина</p>
                </div>
                <div className="item_two">
                    <div className="two">
                        <p>2</p>
                    </div>
                    <p className="text">Оформление заказа</p>
                </div>
                <div className="item_three">
                    <div className="three">
                        <p>3</p>
                    </div>
                    <p className="text">Заказ принят</p>
                </div>
            </div>

            <div className="container">
                <h1>Заказ на доставку</h1>
                <div className="wrapper">
                    <div className="contain_one">
                        <div className="item_one item">
                            <p>Имя</p>
                            <input id='imya' type="text" />
                        </div>
                        <div className="item_two item">
                            <p>Телефон</p>
                            <input id='telef' type="number" />
                        </div>
                        <div className="item_three item">
                            <p>Адрес доставки</p>
                            <div onClick={kuda} className='black'>{text}</div>
                        </div>
                        <div className="item_four item">
                            <p>Время доставки</p>
                            <div className='pobist' onClick={openVrem}>
                                <p>{times}</p>
                            </div>
                        </div>
                        <div className="magazin">
                            <div className="vernutsya">
                            <i class="bi bi-arrow-left"></i>
                                <NavLink to={'/card'}>
                                    <p> Вернуться в магазин</p>
                                </NavLink>
                            </div>
                            <div className="ofor">

                                <button className='ford' onClick={ofarmit}>Оформление заказа <i className="fa-solid fa-chevron-right"></i></button>
                                <NavLink to={'/po_card'}>
                                    <button className='salom' ref={zbz}>oплатить</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bsa" ref={open} >
                <div className="wrap"  >
                    <div className="card">
                        <div className="vor">
                            <p>Куда доставить?</p>
                            <p onClick={close}>&times;</p>
                        </div>
                        <button onClick={openAdress}>Доставка</button>
                    </div>
                </div>
            </div>
            <div className="adress" ref={adress}>
                <div className="wrapper">
                    <div className="container">
                        <div className="tittle">
                            <h2>Куда доставить?</h2>
                            <p className='closeAdress' onClick={closeAddress}>&times;</p>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="item_one">
                                <input required type="text" placeholder='Город' />
                                <input required type="text" placeholder='Улица' />
                            </div>
                            <div className="item_two">
                                <input required type="text" placeholder='Дом' />
                                <input required type="text" placeholder='Подьезд' />
                                <input required type="text" placeholder='Зтаж' />
                                <input required type="text" placeholder='Квартира' />
                            </div>
                            <input required className='inp' type="text" placeholder='Название адреса' />
                            <p>Например, <span>Дом</span> или <span>Работа</span></p>
                            <textarea id="area" cols="61" rows="3" placeholder='Комментария'></textarea>
                            <br />
                            <button type='submit' className='btn'>Подтвердить адрес</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="vremya" ref={vrem}>
                <div className="wrap">
                    <div className="container">
                        <div className="item">
                            <h1>Время доставки</h1>
                            <p onClick={closeVrem}>&times;</p>
                        </div>
                        <div className="card">
                            <div onClick={() => closeTime('Побыстрее')} className="card_one">Побыстрее</div>
                            <div onClick={() => closeTime('07:00 - 09:00')} className="card_one">07:00 - 09:00</div>
                            <div onClick={() => closeTime('09:00 - 12:00')} className="card_one">09:00 - 12:00</div>
                            <div onClick={() => closeTime('07:00 - 09:00')} className="card_one">07:00 - 09:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daastavka