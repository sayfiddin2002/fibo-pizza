import React from 'react'
import { Link } from 'react-router-dom'

function SupiDetail(props) {
    return (
        <div className="detailed">
            <div className="detail">
                <div className="container">
                    <div className="card">
                        <img src={props.sup.img} alt="Error" />
                        <div className='zabt'>
                            <div className='wrapper'>
                                <div className='item'>
                                    <p>{props.sup.name}</p>
                                    <p>{props.sup.description}</p>
                                </div>
                                <div className='time'>
                                    <Link to='/supi'>
                                        <span className='times'>&times;</span>
                                    </Link>
                                </div>
                            </div>
                            <Link to='/supi'>
                                <button className='clic' onClick={() => props.addToCart(props.sup)}>Добавить в корзину {props.sup.price} ₽</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupiDetail