import React from 'react'
import pic from '../../assets/red.jpg'
import './productpage.css'
import { Navbar, Footer } from '../../components'

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div class="main-container flex-flow-row mg-2">
                    <div class="img-container flex-flow-row wrap">
                        <img class="product-img" src={pic} alt="item" />
                        <img class="product-img" src={pic} alt="item" />
                        <img class="product-img" src={pic} alt="item" />
                        <img class="product-img" src={pic} alt="item" />
                    </div>
                    <div class="product-info flex-flow-column">
                        <h2>Nike</h2>
                        <p>Red hoodie dress.</p>
                        <hr />
                        <h3 class="price">
                            <ins>Rs 999</ins> <del>Rs 1299</del>
                        </h3>
                        <h3>Size</h3>
                        <div class="flex-flow-row sizes">
                            <div class="avatar avatar-text avatar-xs">XS</div>
                            <div class="avatar avatar-text avatar-xs">S</div>
                            <div class="avatar avatar-text avatar-xs">M</div>
                            <div class="avatar avatar-text avatar-xs">L</div>
                            <div class="avatar avatar-text avatar-xs">XL</div>
                        </div>
                        <div class="dropdown flex-flow-row">
                            <label for="quantity">
                                <h3>Quantity</h3>
                            </label>
                            <select name="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <p>Delivery by 1 Mar 2022</p>
                        <div class="product-actions flex-flow-row">
                            <button class="cart-btn">Add to cart</button>
                            <button class="cart-btn wishlist">
                                Add to wishlist
                            </button>
                        </div>
                        <p>Customer ratings: 4/5 stars</p>
                        <hr />
                        <h3>Customer reviews</h3>
                        <div class="review">
                            <h4>Anonymous</h4>
                            <p>4.2/5</p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Necessitatibus laborum placeat corporis
                            provident, voluptas ad blanditiis enim molestias
                            porro ratione adipisci voluptate cupiditate ea autem
                            optio ab tempora quos quis.
                        </div>
                        <div class="review">
                            <h4>Anonymous</h4>
                            <p>4.2/5</p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Necessitatibus laborum placeat corporis
                            provident, voluptas ad blanditiis enim molestias
                            porro ratione adipisci voluptate cupiditate ea autem
                            optio ab tempora quos quis.
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProductPage
