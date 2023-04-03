import React, { useEffect } from 'react'
import logoo from '../img/logo2.png';
import img from '../img/img.png';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

function Navbar(props) {

    const orderRef = useRef();
    const open = useRef();
    const openRegistr = useRef();
    const [count, setCount] = useState(1);
    const closeKorzinka = (order) => {
        props.deleteOrderItem(order)
        props.setCount(props.count - order.price)
    }
    const rolls = useRef()

    const [isOpen, setIsOpen] = useState(false);

    const closcard = () => {
        rolls.current.style.display = 'none'
    }
    useEffect(() => {
        return;
    }, [count])

    useEffect(() => {
        if (props.orders.length === 0) {
            localStorage.setItem('total', 0)
        }
    }, [])

    const [oren, setOren] = useState(false);


    const openOrder = () => {
        setOren(prevState => !prevState)
    }

    const vhod = () => {
        open.current.style.display = 'block'
    }

    const close = () => {
        open.current.style.display = 'none'
    }

    const closeRegistr = () => {
        openRegistr.current.style.display = 'none'
    }

    const registr = () => {
        openRegistr.current.style.display = 'block'
    }

    let getTotalPrice = [];

    return (
        <div className='big'>

            <div className='container'>
                <div className='nav'>
                    <div className='c-nav'>
                        <div><img src={logoo} alt="img" /></div>
                        <div className='logo'>
                            <div className='dostavki'>
                                <p className='pop'>
                                    Доставка пасты <span style={{ color: '#F7D22D' }}>Москва</span>
                                </p>
                                <div>
                                    <img src={img} alt="img" />
                                    <p>Яндекс еда-4.8</p>
                                    <i style={{ padding: '0 15px 0 6px' }} className="fa-solid fa-star"></i>
                                    <p>Время доставки-от 31 мин</p>
                                </div>
                            </div>
                            <div className='zakaz'>
                                <button className='bnt' onClick={registr}>Заказать звонок</button>
                                <p>8 916 234 06 58</p>
                            </div>
                        </div>

                        <i onClick={() => setIsOpen(!isOpen)} className={`bi ${!isOpen ? " bi-list" : "bi-x"}`}></i>

                    </div>
                    <div className={`nav-footer ${isOpen ? "nav-open" : "nav-close"} `}>
                        <ul onClick={() => setIsOpen(false)}>
                            <li >
                                <Link to='/zavtrks'>Завтраки</Link>
                            </li>
                            <li >
                                <Link to='/pitsa'>Пицца</Link>
                            </li>
                            <li >
                                <Link to={'/pasta'}>Паста</Link>
                            </li>
                            <li >
                                <Link to={'/ravioli'}>Равиоли</Link>
                            </li>
                            <li >
                                <Link to={'/supi'}>Супы</Link>
                            </li>
                            <li >
                                <Link to={'/zakiska'}>Горячие закуски</Link>
                            </li>
                            <li >
                                <Link to={'/salat'}>Салаты</Link>
                            </li>
                            <li >
                                <Link to={'/suv'}>Напитки</Link>
                            </li>
                            <li >
                                <Link to='/kontact'>Контакты</Link>
                            </li>
                            <li >
                                <a href="#" onClick={vhod}>Войти</a>
                            </li>
                        </ul>


                        <div className='pols'>
                            <button className='pols_btn' onClick={openOrder}>Корзина | {props.orders.length}</button>
                            {oren
                                ? <div ref={rolls} className='rols' >
                                    {props.orders.length !== 0
                                        ? props.orders.map((order, index) => {
                                            return (
                                                <div key={order.id}>
                                                    <hr />
                                                    <div className="korzina" >
                                                        {getTotalPrice.push(props.orders[index])}
                                                        <img src={order.img} alt="Error" />
                                                        <div className="tittle">
                                                            <div className='title_body'>
                                                                <p className='krem'>{order.name}</p>
                                                                <div className='circle' onClick={() => closeKorzinka(order)}>
                                                                    <p>&times;</p>
                                                                </div>
                                                            </div>
                                                            <div className="k-footer">
                                                                <div className="four">
                                                                    <div className='minus' onClick={() => {
                                                                        order.stock >= 1 && setCount(order.stock--)
                                                                        localStorage.setItem('total', getTotalPrice.reduce((acc, item) => acc + (item.price * item.stock), 0) )
                                                                    }} >-</div>
                                                                    <p className='count'>{order.stock >= 1 ? order.stock : 1}</p>
                                                                    <div className='plus' onClick={() => {
                                                                        setCount(order.stock++)
                                                                        localStorage.setItem('total', getTotalPrice.reduce((acc, item) => acc + (item.price * item.stock), 0) )
                                                                    }}>+</div>
                                                                </div>
                                                                <p className='price'>{order.stock > 1 ? order.price * order.stock : order.price} ₽</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })

                                        : <div className='no_date'>
                                            <p>No results</p>
                                        </div>
                                    }

                                    {props.orders.length !== 0
                                        ? <div className="kor-foter" >
                                            <div className="foter-header">
                                                <p>Сумма заказа</p>
                                                <p>{getTotalPrice.reduce((acc, item) => acc + (item.price * item.stock), 0) } ₽</p>
                                            </div>
                                            <div className="kor_foter">
                                                <NavLink to={'/card'}>
                                                    <button onClick={closcard}>В корзину</button>
                                                </NavLink>
                                                <NavLink to={'/dastavka'}>
                                                    <button onClick={closcard}>Оформить</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                        : null}
                                </div>
                                : null}

                        </div>

                        <div className="clow" ref={open}>
                            <div id='div'>
                                <div className="srov">
                                    <div className="wrapper">
                                        <p>Вход на сайт</p>
                                        <p onClick={close}>&times;</p>
                                    </div>
                                    <div className="inp">
                                        <p>Номер телефона</p>
                                        <input type="number" />
                                    </div>
                                    <div className="clow-footer">
                                        <button>Выслать код</button>
                                        <p>
                                            Продолжая, вы соглашаетесь со сбором и обработкой
                                            персональных данных и пользовательским соглашением
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                            персональных данных и пользовательским соглашением
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar