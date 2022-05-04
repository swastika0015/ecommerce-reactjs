import React from 'react'
import './cart.css'
import pic1 from '../../assets/women.jpg'
import pic2 from '../../assets/women2.jpg'
import {Navbar, Footer } from '../../components/index';


const Cart = () => {
  return (
    <div>
        <Navbar/>
        <section>
        <div className="main-container flex-flow-row mg-2">
            <div className="flex-flow-column cart-items">
                <div className="card-cart card-component flex-flow-row card-horizontal">
                    <img className="card-img card-img-horizontal" src={pic1}/>
                  <div className="card-details flex-flow-column-horizontal flex-flow-column">
                    <h3>Nike</h3>
                    <p>Red hoodie dress.</p>
                    <div className="dropdown flex-flow-row">
                        <label for="quantity">Qty</label>
                        <select name="quantity">
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

                    <p className="price"><ins>Rs 999</ins> <del>Rs 1299</del></p>
                    <p>Delivery by 1 Mar 2022</p>
                    <div className="card-actions">
                        <button className="card-action-btn  card-btn">
                            <i className="fa fa-cross  fa-lg"></i>Remove
                        </button>
                    </div>
                  </div>
                </div>

                <div className="card-cart card-component flex-flow-row card-horizontal">
                    <img className="cart-img card-img-horizontal" src={pic2}/>
                  <div className="cart-details flex-flow-column-horizontal flex-flow-column">
                    <h3>H&M</h3>
                    <p>Yellow H&M crop hoodie.</p>
                    <div className="dropdown flex-flow-row">
                        <label for="quantity">Qty</label>
                        <select name="quantity">
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

                    <p className="price"><ins>Rs 1299</ins> <del>Rs 2299</del></p>
                    <p>Delivery by 1 Mar 2022</p>
                    <div className="card-actions">
                        <button className="card-action-btn  card-btn">
                            <i className="fa fa-cross  fa-lg"></i>Remove
                        </button>
                    </div>
                  </div>
                </div>   

                <div className="card-cart card-component flex-flow-row card-horizontal  wishlist-add">
                    
                  <div className="card-details wishlist-add">
                    <h3><a href="../wishlist/wishlist.html">Add more items from Wishlist!</a></h3>
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
                        <p>Rs 2299</p>
                    </div>
    
                    <div className="price-details discount flex-flow-row">
                        <p>Discount</p>
                        <p>Rs 1300</p>
                    </div>
                    <hr/>
                    <div className="price-details discount flex-flow-row">
                        <p>Convinience fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="price-details discount flex-flow-row">
                        <h3>Total Amount</h3>
                        <h3>Rs 2299</h3>
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