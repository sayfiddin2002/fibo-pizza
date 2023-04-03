import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swiper from '../Components/swiper/swiper';


import oplata1 from '../img/oplata1.png';
import oplata2 from '../img/oplata2.png';
import oplata3 from '../img/oplata3.png';
import oplata4 from '../img/oplata4.png';


function Novinki(props) {

  return (
    <div className='novinki'>

      <Swiper />
      <div className="container">
        <h1>Новинки</h1>
        <div className="wrapper">
          {props.novinki.map(novi => {
            return (
              <NavLink key={novi.id} to={`/novinki/${novi.id}`}>
                <div onClick={() => props.setDetail(novi)} className="card" >
                  <img src={novi.img} alt="Error" />
                  <div className="item">
                    <p>{novi.name}</p>
                    <p className='novprice'>{novi.price} ₽</p>
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>

      <div className='pas-foot'>
        <h1>Пицца</h1>
        <div className='container'>
          {props.pitsa.map(p => {
            return (
              <div className="card" key={p.id}>
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

      <div className="opplata">
        <h1>Оплата и доставка</h1>
        <div className="container">
          <div className="item">
            <img src={oplata1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="item">
            <img src={oplata2} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="item">
            <img src={oplata3} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="item">
            <img src={oplata4} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>

      <iframe className='locations'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.588803794508!2d37.477642515926995!3d55.661360580528985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54da002656bc7%3A0xa799933657c1d4f!2z0L_RgC4g0JLQtdGA0L3QsNC00YHQutC-0LPQviwgODbQsiwg0JzQvtGB0LrQstCwLCAxMTk0MTU!5e0!3m2!1sru!2sru!4v1645970050041!5m2!1sru!2sru">
      </iframe>
    </div>

  )
}

export default Novinki