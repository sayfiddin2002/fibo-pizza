import React from 'react'
import { Link } from 'react-router-dom'

function ZavrtrkDetail(props) {
  return (
    <div className="detailed">
      <div className="detail">
        <div className="container">
          <div className="card">
            <img src={props.detailed.img} alt="" />
            <div className='zabt'>
              <div className='wrapper'>
                <div className='item'>
                  <p>{props.detailed.name}</p>
                  <p>{props.detailed.description}</p>
                </div>
                <div className='time'>
                  <Link to='/zavtrks'>
                    <span className='times'>&times;</span>
                  </Link>
                </div>
              </div>
              <Link to='/zavtrks'>
                <button className='clic' onClick={() => props.addToCart(props.detailed)}>Добавить в корзину {props.detailed.price} ₽</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZavrtrkDetail