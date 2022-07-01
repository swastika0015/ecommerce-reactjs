import React from 'react'
import './card1.css'

const Card1 = (props) => {
    return (
        <div className="card shadow card1-component">
            <img className="card1-img" src={props.img} />
            <div className="card1-details flex-flow-column">
                <h2>
                    <a>{props.heading}</a>
                </h2>
            </div>
        </div>
    )
}

export default Card1
