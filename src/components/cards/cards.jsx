import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
            
            <div className="card card-component">               
              {props.outofstock && <div className="text-overlay">
                    <h2>{props.outofstock}</h2>
                </div>}
                <Link to="/productpage">
                <img className="card-img" src={props.img} alt="Crop Hoodies"/>
                <div className="card-details flex-flow-column">
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                    <p className="price"><ins>{props.price}</ins> <del>{props.originalPrice}</del></p>
                </div>
                </Link>   

                {props.cart.includes(props)> 0 ? (
                  <button className=" card-action-btn" onClick={() => {
                    props.setCart(props.cart.filter((c) => c.id !== props.id))
                    console.log(props.cart)
                  }}
                  ><i className="fa fa-shopping-cart fa-lg"></i>Remove from Cart</button>
                ):(
                  <button className=" card-action-btn" onClick={() => {
                    props.setCart([...props.cart, props])
                    console.log(props.cart)
                  }}
                  ><i className="fa fa-shopping-cart fa-lg"></i>Add to card</button>
                )}
                <div className="card-actions">
                  

                </div>
            </div>     
     
  )
}

export default Cards;