import React, { useState } from 'react'
import './cart.css'
import {Navbar, Footer } from '../../components/index';
import {Link} from 'react-router-dom'
import { useStateValue } from '../../context/cart-context';


const Cart = () => {
    const [{ cartList }, dispatch] = useStateValue();
    console.log(cartList);
  return (
    <div>
        <Navbar/>
        <section>
        <div className="main-container flex-flow-row mg-2">
            <div className="flex-flow-column cart-items">
                {
                    cartList.sort((a,b) => a.id - b.id).map(cart => <div key={cart.id} className="card-cart card-component flex-flow-row card-horizontal">
                    <img className="cart-img card-img-horizontal" src={cart.img}/>
                  <div className="cart-details flex-flow-column-horizontal flex-flow-column">
                    <h3>{cart.heading}</h3>
                    <p>{cart.subheading}</p>
                    <div className="dropdown flex-flow-row">
                        <label for="quantity">Qty</label>
                        <select onChange={(e) => dispatch({type: "INCREMENT_QTY", payload: cart, qty: e.target.value})} name="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>

                        <label for="size">Size</label>
                        <select name="size">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        </select>
                    </div>

                    <p className="price"><ins>Rs {cart.price}</ins> <del>Rs {cart.originalPrice}</del></p>
                    <p className='delivery-date'>Delivery by 1 Mar 2022</p>
                    <div className="card-actions">
                        <button className="card-action-btn  card-btn" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: cart})}>
                            <i className="fa fa-cross  fa-lg"></i>Remove
                        </button>
                    </div>
                  </div>
                </div>)
                }

                <div className="card-cart card-component flex-flow-row card-horizontal  wishlist-add">
                    
                  <div className="card-details wishlist-add">
                    <Link to="whishlist"><h3>Add more items from Wishlist!</h3></Link>
                    </div>
                </div>   
            </div>

            <div className="bill-sidebar flex-flow-column">
                
                    <div className="price-details flex-flow-row">
                        <h3><a>Coupon</a></h3>
                        <div className="card-actions">
                            <button className="card-action-btn card-btn cart-btn">
                             Apply
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <h3>Price Details</h3>
                    <hr/>
                    <div className="price-details flex-flow-row">
                        <p>Total MRP</p>
                        <p>Rs {cartList.reduce((acc, curr) => {
                            return acc + curr.qty * curr.price;
                        }, 0)}</p>
                    </div>
    
                    <div className="price-details discount flex-flow-row">
                        <p>Discount</p>
                        <p>Rs {cartList.reduce((acc, curr) => {
                            return acc + curr.qty * curr.originalPrice;
                        }, 0)}</p>
                    </div>
                    <hr/>
                    <div className="price-details discount flex-flow-row">
                        <p>Convinience fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="price-details discount flex-flow-row">
                        <h3>Total Amount</h3>
                        <h3>Rs {cartList.reduce((acc, curr) => {
                            return acc + curr.qty * curr.price;
                        }, 0)}</h3>
                    </div>
                    <hr/>

                    <div className="card-actions">
                        <button className="card-action-btn cart-btn">
                            Proceed to pay
                        </button>
                    </div>
                </div>   
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Cart;