import React from 'react'
import { NavLink } from 'react-router-dom'

function Pasta(props) {
    return (
        <div className='pas-foot'>
            <h1>Паста</h1>
            <div className="container">
                {props.pasta.map(pas => {
                    return (
                        <div data-aos="fade-up" className="card" key={pas.id}>
                            <NavLink to={`/pasta/${pas.id}`}>
                                <div onClick={()=> props.setPast(pas)} className="image">
                                    <img  src={pas.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className='card-foter'>
                                <h3>{pas.name.slice(0, 20)}..</h3>
                                <p>{pas.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{pas.price} ₽</p>
                                    <button onClick={() => props.addToCart(pas)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pasta