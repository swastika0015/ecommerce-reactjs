import React from 'react'
import p1 from "../../assets/product1/1.png"
import p2 from "../../assets/product1/2.png"
import p3 from "../../assets/product1/3.png"
import p4 from "../../assets/product1/4.png"
import p5 from "../../assets/product1/5.png"
import { Footer, Navbar } from '../../components'
import './productpage.css'


const ProductPage = () => {
    // Functionality pending!
    const [productImages, setProductImages] = React.useState([p1, p2, p3, p4, p5])
    const [currentImage, setCurrentImage] = React.useState(0)

    const changeImage = (index) => {
        setCurrentImage(index)
    }
    return (
        <div>
            <Navbar />
            <section>
                <div class="main-container flex-flow-row mg-2">
                    <div class="product-image-container">
                    <div class="img-container flex-flow-row wrap">
                        <img class="product-img" src={productImages[currentImage]} alt="item" />
                    </div>
                    <div className={`product-inactive-img-container flex-flow-row wrap`}>
                        <div className={`image-wrapper ${currentImage === 0 && "active-image"}`} onClick={()=>changeImage(0)}>
                        <img className="product-inactive-img" src={p1} alt="item" />
                        </div>
                        <div className={`image-wrapper ${currentImage === 1 && "active-image"}`}  onClick={()=>changeImage(1)}>
                        <img className="product-inactive-img" src={p2} alt="item" />
                        </div>
                        <div className={`image-wrapper ${currentImage === 2 && "active-image"}`}  onClick={()=>changeImage(2)}>
                        <img className="product-inactive-img" src={p3} alt="item" />
                        </div>
                        <div className={`image-wrapper ${currentImage === 3 && "active-image"}`}  onClick={()=>changeImage(3)}>
                        <img className="product-inactive-img" src={p4} alt="item" />
                        </div>
                        <div className={`image-wrapper ${currentImage === 4 && "active-image"}`} onClick={()=>changeImage(4)} >
                        <img className="product-inactive-img" src={p5} alt="item" />
                        </div>
                    </div>
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
