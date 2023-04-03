import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

function Zavtrk(props) {
    return (
        <div className='pas-foot'>
            <h1>Завтраки</h1>
            <div className="container">
                {props.zavtrks.map((zavtrk, index) => {
                    return (
                        <div data-aos="fade-up" onClick={() => props.setDetailed(zavtrk)} key={index} className="card">
                            <NavLink to={`/zavtrks/${zavtrk.id}`}>
                                <div className="image">
                                    <img src={zavtrk.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className="card-foter">
                                <h3>{zavtrk.name.slice(0, 20)}...</h3>
                                <p>{zavtrk.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{zavtrk.price} ₽</p>
                                    <button onClick={() => props.addToCart(zavtrk)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>   
    )
}

export default Zavtrk