import React from 'react'
import { NavLink } from 'react-router-dom'

function Napitki(props) {
    return (
        <div  className='pas-foot'>
            <h1>Напитки</h1>
            <div className="container">
                {props.suv.map(s => {
                    return (
                        <div data-aos="fade-up" className="card" key={s.id}>
                            <NavLink to={`/suv/${s.id}`}>
                                <div onClick={()=> props.setNapitki(s)} className="image">
                                    <img src={s.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className='card-foter'>
                                <h3>{s.name.slice(0, 20)}...</h3>
                                <p>{s.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{s.price} ₽</p>
                                    <button onClick={() => props.addToCart(s)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Napitki