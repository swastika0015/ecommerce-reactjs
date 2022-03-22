import React from 'react';
import "./mainpagecard.css";
import pic from "../../assets/women.jpg"



const Mainpagecard = () => {
  return (
            <div className="card-container">
                <div className="flex-flow-row card-items">
                    <div className="card card-component">
                        <img className="card-img" src={pic} alt="women"/>
                        <div className="card-details flex-flow-column">
                            <h2><a>Apparel</a></h2> 
                        </div>
                    </div>

                    <div className="card card-component">
                        <img className="card-img" src={pic} alt="women"/>
                        <span className="bestseller-badge"><h3>Flat 40% off</h3></span>
                        <div className="card-details flex-flow-column">
                            <h2><a>Flash Sale</a></h2>
                        </div>  
                    </div>

                    <div className="card card-component">
                        <img className="card-img" src={pic} alt="women"/>
                        <div className="card-details flex-flow-column">
                            <h2><a>Beauty</a></h2>
                        </div>  
                    </div>
                </div>
            </div>
  )
};


export default Mainpagecard;