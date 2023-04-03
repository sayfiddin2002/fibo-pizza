import React from 'react'
import { Link } from 'react-router-dom'

function SalatDetail(props) {
    return (
        <div className="detailed">
            <div className="detail">
                <div className="container">
                    <div className="card">
                        <img src={props.alivya.img} alt="" />
                        <div className='zabt'>
                            <div className='wrapper'>
                                <div className='item'>
                                    <p>{props.alivya.name}</p>
                                    <p>{props.alivya.description}</p>
                                </div>
                                <div className='time'>
                                    <Link to='/salat'>
                                        <span className='times'>&times;</span>
                                    </Link>
                                </div>
                            </div>
                            <Link to='/salat'>
                                <button className='clic' onClick={() => props.addToCart(props.alivya)}>Добавить в корзину {props.alivya.price} ₽</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalatDetail