import React from 'react'
import '../styles/CardList.css'
import Card from "./Card";

const CardList = ({robots}) => {
    return (
        <div className={'robots-section'}>
            {
                robots.map((user, i)=> {
                    return  <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        city={robots[i].address.city}
                    />
                })
            }

        </div>
    )
}

export default CardList