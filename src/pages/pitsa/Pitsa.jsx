import React from 'react'
import { NavLink } from 'react-router-dom'

function Pitsa(props) {
    return (
        <div className='pas-foot'>
            <h1>Пицца</h1>
            
            <div className='container'>
                {props.pitsa.map(p => {
                    return (
                        <div data-aos="fade-up" className="card" key={p.id}>
                            <NavLink to={`/pitsa/${p.id}`}>
                                <div className='image' onClick={() => props.setPissa(p)}>
                                    <img src={p.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className='card-foter'>
                                <h3>{p.name.slice(0, 20)}...</h3>
                                <p>{p.description.slice(0, 60)}...</p>
                                <div className='pas-footer'>
                                    <p>{p.price} ₽</p>
                                    <button onClick={() => props.addToCart(p)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pitsa