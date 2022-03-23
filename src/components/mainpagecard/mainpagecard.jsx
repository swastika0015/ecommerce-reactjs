import React from 'react';
import "./mainpagecard.css";
import Card1 from './card1';
import card1data from './card1data';



const Mainpagecard = () => {
    const cardElements = card1data.map(card => {
        return <Card1 img={card.img} heading={card.heading}/>
    })
  return (
           <div>
                <div className="card-container">
                    <div className="flex-flow-row card-items">
                        {cardElements}
                    </div>
                </div>
            </div>
  )
};


export default Mainpagecard;