import React from 'react'
import { Link } from 'react-router-dom'

function Raviolidetail(props) {
  return (
    <div className="detailed">
      <div className="detail">
        <div className="container">
          <div className="card">
            <img src={props.ravi.img} alt="" />
            <div className='zabt'>
              <div className='wrapper'>
                <div className='item'>
                  <p>{props.ravi.name}</p>
                  <p>{props.ravi.description}</p>
                </div>
                <div className='time'>
                  <Link to='/ravioli'>
                    <span className='times'>&times;</span>
                  </Link>
                </div>
              </div>
              <Link to='/ravioli'>
                <button className='clic' onClick={() => props.addToCart(props.ravi)}>Добавить в корзину {props.ravi.price} ₽</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Raviolidetail