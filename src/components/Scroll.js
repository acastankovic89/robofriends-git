import React from 'react'
import '../styles/Scroll.css'

const Scroll = (props) => {
    return(
        <div className={'scrollComponent'}>
            {props.children}
        </div>
    )
}

export default Scroll