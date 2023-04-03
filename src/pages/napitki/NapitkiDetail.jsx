import React from 'react'
import { Link } from 'react-router-dom'

function NapitkiDetail(props) {
    return (
        <div className="detailed">
            <div className="detail">
                <div className="container">
                    <div className="card">
                        <img src={props.napitki.img} alt="Error" />
                        <div className='zabt'>
                            <div className='wrapper'>
                                <div className='item'>
                                    <p>{props.napitki.name}</p>
                                    <p>{props.napitki.description}</p>
                                </div>
                                <div className='time'>
                                    <Link to='/suv'>
                                        <span className='times'>&times;</span>
                                    </Link>
                                </div>
                            </div>
                            <Link to='/suv'>
                                <button className='clic' onClick={() => props.addToCart(props.napitki)}>Добавить в корзину {props.napitki.price} ₽</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NapitkiDetail