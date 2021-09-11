import React from 'react'
import '../styles/Card.css'

const Card = ({id,email,name,city}) => {
    return(
        <div className={'cardWrapper'}>
            <div className={'card'}>
                <img src={`https://robohash.org/${id}?size=200x200`} alt={'robots'}/>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{city}</p>
            </div>
        </div>
    )
}

export default Card