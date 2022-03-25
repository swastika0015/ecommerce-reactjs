import React from 'react'
import Cards from './cards'
import cardsData from './cardsData'

const Productcards = () => {
    const cardElements = cardsData.map(card => {
        return <Cards img={card.img} heading={card.heading} subheading={card.subheading} link={card.link} outofstock={card.outofstock} price={card.price}
        originalPrice={card.originalPrice}/> 
    })
  return (

    <div className="flex-flow-row product-cards">
    {cardElements}
    </div>
  )
}

export default Productcards