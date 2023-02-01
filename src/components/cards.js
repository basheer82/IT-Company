import React from 'react'
import cardsData from '../cards-data'

const Cards = ()=>{


    return(
        <div className = 'cards-div'>
            {cardsData.map((card)=>{
                return(
                    <div className = 'card'>
                        <img src = {card.img} className = 'card-image'/>
                        <div className = 'card-title'>{card.description}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards