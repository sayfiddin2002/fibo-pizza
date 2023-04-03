import React from 'react'
import { NavLink } from 'react-router-dom'

function OpenNovinki(props) {
  return (
    <div id='openNovinkie'>
      <div className="novinkii">
        <div className="card">
          <img src={props.detail.img} alt="" />
          <div className="item">
            <div className="wrap">
              <div className="text">
                <p>{props.detail.name}</p>
                <p>{props.detail.description}</p>
              </div>
              <NavLink to={'/'}>
                <div className="close">
                  <p>&times;</p>
                </div>
              </NavLink>
            </div>
            <NavLink to={'/'}>
              <button onClick={() => props.addToCart(props.detail)} className='nivonki_btn'>Добавить в корзину{props.detail.price} ₽</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenNovinki