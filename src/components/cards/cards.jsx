import React from 'react';
import './cards.css'

const Cards = (props) => {
  return (
       
                <div className="card card-component">               
                  {props.outofstock && <div className="text-overlay">
                        <h2>{props.outofstock}</h2>
                    </div>}
                    <img className="card-img" src={props.img} alt="Crop Hoodies"/>
                    <div className="card-details flex-flow-column">
                        <h2>{props.heading}</h2>
                        <p>{props.subheading}</p>
                        <p className="price"><ins>{props.price}</ins> <del>{props.originalPrice}</del></p>
                    </div>
                    <div className="card-actions">
                        <button className=" card-action-btn"><i className="fa fa-shopping-cart fa-lg"></i>Add to card</button>
                    </div>
                </div>          
  )
}

export default Cards;