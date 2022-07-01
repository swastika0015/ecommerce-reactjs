import React from 'react'
import './cards.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../context/products.context'

const Cards = (props) => {
    const [{ cartList }, dispatch] = useStateValue()

    return (
        <div className="card card-component">
            {props.outofstock && (
                <div className="text-overlay">
                    <h2>{props.outofstock}</h2>
                </div>
            )}
            <Link to="/productpage">
                <img className="card-img" src={props.img} alt="Crop Hoodies" />
                <div className="card-details flex-flow-column">
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                    <p className="price">
                        <ins>{props.price}</ins>{' '}
                        <del>{props.originalPrice}</del>
                    </p>
                </div>
            </Link>

            {cartList.find((item) => item.id === props.id) ? (
                <button
                    onClick={() =>
                        dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: props.product,
                        })
                    }
                    className=" card-action-btn"
                >
                    <i className="fa fa-shopping-cart fa-lg"></i>Remove from
                    cart
                </button>
            ) : (
                <button
                    onClick={() =>
                        dispatch({
                            type: 'ADD_TO_CART',
                            payload: props.product,
                        })
                    }
                    className=" card-action-btn"
                >
                    <i className="fa fa-shopping-cart fa-lg"></i>Add to card
                </button>
            )}

            <div className="card-actions"></div>
        </div>
    )
}

export default Cards
