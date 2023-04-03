import React from 'react'
import { NavLink } from 'react-router-dom'

function Salat(props) {
    return (
        <div className='pas-foot'>
            <h1>Салаты</h1>
            <div className="container">
                {props.salat.map(sat => {
                    return (
                        <div data-aos="fade-up" className="card" key={sat.id}>
                            <NavLink to={`/salat/${sat.id}`}>
                                <div onClick={()=> props.setAlivya(sat)} className="image">
                                    <img src={sat.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className="card-foter">
                                <h3>{sat.name.slice(0, 20)}...</h3>
                                <p>{sat.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{sat.price} ₽</p>
                                    <button onClick={() => props.addToCart(sat)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Salat