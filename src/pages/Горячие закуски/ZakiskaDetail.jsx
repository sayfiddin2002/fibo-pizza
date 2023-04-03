import React from 'react'
import { Link } from 'react-router-dom'

function ZakiskaDetail(props) {
    return (
        <div className="detailed">
            <div className="detail">
                <div className="container">
                    <div className="card">
                        <img src={props.zaks.img} alt="" />
                        <div className='zabt'>
                            <div className='wrapper'>
                                <div className='item'>
                                    <p>{props.zaks.name}</p>
                                    <p>{props.zaks.description}</p>
                                </div>
                                <div className='time'>
                                    <Link to='/zakiska'>
                                        <span className='times'>&times;</span>
                                    </Link>
                                </div>
                            </div>
                            <Link to='/zakiska'>
                                <button className='clic' onClick={() => props.addToCart(props.zaks)}>Добавить в корзину {props.zaks.price} ₽</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZakiskaDetail