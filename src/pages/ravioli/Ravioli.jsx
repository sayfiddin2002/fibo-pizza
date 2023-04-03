import React from 'react'
import { NavLink } from 'react-router-dom'

function Ravioli(props) {
  return (
    <div className='pas-foot'>
      <h1>Равиоли</h1>
      <div className="container">
        {props.ravioli.map(ravi => {
          return (
            <div data-aos="fade-up" className="card" key={ravi.id}>
              <NavLink to={`/ravioli/${ravi.id}`}>
                <div onClick={()=> props.setRavi(ravi)} className="image">
                  <img src={ravi.img} alt="Error" />
                </div>
              </NavLink>
              <div className="card-foter">
                <h3>{ravi.name.slice(0, 20)}...</h3>
                <p>{ravi.description.slice(0, 60)}...</p>
                <div className="pas-footer">
                  <p>{ravi.price} ₽</p>
                  <button onClick={() => props.addToCart(ravi)}>Купить</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ravioli