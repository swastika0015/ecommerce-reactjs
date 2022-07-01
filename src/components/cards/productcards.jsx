import React from 'react'
import { useStateValue } from '../../context/products.context'
import Cards from './cards'
import './productcards.css'

const Productcards = () => {
    const [{ products, filters }] = useStateValue()
    let _products = [...products]

    const getFilteredProducts = () => {
        for (let [key, value] of Object.entries(filters)) {
            if (!value) {
            } else if (key === 'category')
                _products = [
                    ..._products.filter((item) => item.category === value),
                ]
            else if (key === 'price') {
                const lowerPrice = value.split(' - ')[0]
                const upperPrice = value.split(' - ')[1]
                _products = [
                    ..._products.filter((item) => {
                        if (
                            item.price > Number(lowerPrice) &&
                            item.price < Number(upperPrice)
                        ) {
                            return true
                        }
                        return false
                    }),
                ]
            } else if (key === 'color') {
                _products = [
                    ..._products.filter((item) => {
                        if (item.color === value) return true
                        return false
                    }),
                ]
            } else if (key === 'rating') {
                _products = [
                    ..._products.filter((item) => {
                        if (Number(value) === 1 && item.rating === 1) {
                            return true
                        } else if (item.rating >= Number(value)) {
                            return true
                        }
                        return false
                    }),
                ]
            }
        }

        return _products
    }

    return (
        <div className="flex-flow-row wrap product-cards">
            {getFilteredProducts().map((card) => (
                <Cards
                    product={card}
                    id={card.id}
                    img={card.img}
                    heading={card.heading}
                    subheading={card.subheading}
                    link={card.link}
                    outofstock={card.outofstock}
                    price={card.price}
                    originalPrice={card.originalPrice}
                    key={card.id}
                />
            ))}
        </div>
    )
}

export default Productcards
