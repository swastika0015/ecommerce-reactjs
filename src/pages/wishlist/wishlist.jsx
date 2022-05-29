import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from '../../components';
import { Footer } from '../../components';
import Sidebar from '../../components/sidebar/sidebar';
import { useWishlistValue } from '../../context/wishlist-context';


const Wishlist = props => {
    const [{wishlist}, dispatch] = useWishlistValue();

  return (
    <>
    <Navbar/>
    <div className="filter-sort">
            <h3 className="sidebar-heading">FILTERS</h3>
        </div>
    <section>
    <div className="main-container flex-flow-row">
    <Sidebar />

    <div className="flex-flow-row wrap product-cards">
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

              <div className="card-actions flex-flow-row">
                <button className=" card-action-btn">Add to card</button>
        
                <button className=" card-action-btn wishlist-btn"><i className="fa fa-heart fa-lg"></i></button> 

                </div>
            </div>     
  
    
    </div>
    
    </div>
            
    </section>
    <Footer/>
    </>
  )
}


export default Wishlist