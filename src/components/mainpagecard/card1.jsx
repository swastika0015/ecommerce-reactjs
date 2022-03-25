import React from 'react'
import "./card1.css";

const Card1 = (props) => {
  return (
        <div className="card card1-component">
            <img className="card-img" src={props.img}/>
            <div className="card-details flex-flow-column">
                <h2><a>{props.heading}</a></h2> 
            </div>
        </div>
  )
}

export default Card1;

