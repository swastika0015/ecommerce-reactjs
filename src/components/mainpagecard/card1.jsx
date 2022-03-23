import React from 'react'

const Card1 = (props) => {
  return (
        <div className="card card-component">
            <img className="card-img" src={props.img}/>
            <div className="card-details flex-flow-column">
                <h2><a>{props.heading}</a></h2> 
            </div>
        </div>
  )
}

export default Card1;

