import React from 'react'
import { useStateValue } from '../../context/products.context'
import './sidebar.css'

const Sidebar = () => {
    const [_, dispatch] = useStateValue()

    const handleFilters = (e) => {
        dispatch({
            type: 'SET_FILTER',
            payload: { type: e.target.name, filter: e.target.value },
        })
    }

    return (
        <div>
            <div className="sidebar flex-flow-column">
                <div className="sidebar-item categories">
                    <h3>Categories</h3>
                    <div
                        className="radio-btns"
                        onChange={(e) => handleFilters(e)}
                    >
                        <input
                            type="radio"
                            name="category"
                            value="Tops and Tees"
                            id="Tops and Tees"
                        />
                        <label htmlFor="Tops and Tees">Tops and Tees</label>
                        <br />
                        <input
                            type="radio"
                            name="category"
                            value="Jeans and Trousers"
                            id="Jeans and Trousers"
                        />
                        <label htmlFor="Jeans and Trousers">
                            Jeans and Trousers
                        </label>
                        <br />
                        <input
                            type="radio"
                            name="category"
                            value="Jewellery"
                            id="Jewellery"
                        />
                        <label htmlFor="Jewellery">Jewellery</label>
                    </div>
                </div>
                <div className="sidebar-item">
                    <h3>Price</h3>
                    <div
                        className="slide-container radio-btns"
                        onChange={(e) => handleFilters(e)}
                    >
                        {/* <input
                            type="range"
                            className="slider"
                            min="500"
                            max="10000"
                            value="5000"
                        />
                        <br /> */}
                        <input
                            type="radio"
                            name="price"
                            id="price_500"
                            value="500 - 1500"
                        />
                        <label htmlFor="price_500">500 - 1500</label>
                        <br />
                        <input
                            type="radio"
                            name="price"
                            id="price_1500"
                            value="1500 - 3000"
                        />
                        <label htmlFor="price_1500">1500 - 3000</label>
                        <br />
                        <input
                            type="radio"
                            name="price"
                            id="price_3000"
                            value="3000 - 5000"
                        />
                        <label htmlFor="price_3000">3000 - 5000</label>
                        <br />
                    </div>
                </div>
                <div className="sidebar-item">
                    <h3>Colors</h3>

                    <div
                        className="colors-container radio-btns"
                        onChange={(e) => handleFilters(e)}
                    >
                        <input name="color" type="radio" value="red" id="red" />
                        <label htmlFor="red">
                            <i className="fa fa-circle red"></i>Red
                        </label>
                        <br />

                        <input
                            name="color"
                            type="radio"
                            value="blue"
                            id="blue"
                        />
                        <label htmlFor="blue">
                            <i className="fa fa-circle blue"></i>Blue
                        </label>
                        <br />

                        <input
                            name="color"
                            type="radio"
                            value="black"
                            id="black"
                        />
                        <label htmlFor="black">
                            <i className="fa fa-circle  black"></i>Black
                        </label>
                        <br />

                        <input
                            name="color"
                            type="radio"
                            value="silver"
                            id="silver"
                        />
                        <label htmlFor="silver">
                            <i className="fa fa-circle pink"></i>Silver
                        </label>
                        <br />

                        <input
                            name="color"
                            type="radio"
                            value="yellow"
                            id="yellow"
                        />
                        <label htmlFor="yellow">
                            <i className="fa fa-circle yellow"></i>Yellow
                        </label>
                        <br />
                    </div>
                </div>
                <div className="sidebar-item">
                    <h3>Ratings</h3>
                    <div
                        className="ratings-container radio-btns"
                        onChange={(e) => handleFilters(e)}
                    >
                        <input
                            type="radio"
                            id="rating_4"
                            name="rating"
                            value="4"
                        />
                        <label htmlFor="rating_4">4 stars and above</label>
                        <br />
                        <input
                            type="radio"
                            id="rating_3"
                            name="rating"
                            value="3"
                        />
                        <label htmlFor="rating_3">3 stars and above</label>
                        <br />
                        <input
                            type="radio"
                            id="rating_2"
                            name="rating"
                            value="2"
                        />
                        <label htmlFor="rating_2">2 stars and above</label>
                        <br />
                        <input
                            type="radio"
                            id="rating_1"
                            name="rating"
                            value="1"
                        />
                        <label htmlFor="rating_1">Below 2 stars</label>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
