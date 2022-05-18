import React from 'react'
import Cards from './cards'
import cardsData from './cardsData'
import './productcards.css'



const Productcards = () => {
  return (
    <div className="flex-flow-row wrap product-cards">
    {
      cardsData.map(card => ( <Cards product={card} id={card.id} img={card.img} heading={card.heading} subheading={card.subheading} link={card.link} outofstock={card.outofstock} price={card.price}
        originalPrice={card.originalPrice} key={card.id}/>))
    }
    </div>
  )
}

export default Productcards;