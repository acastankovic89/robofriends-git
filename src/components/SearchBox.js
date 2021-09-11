import React from 'react'
import '../styles/SearchBox.css'

const SearchBox = ({searchChange}) => {
    return (
        <div className={'searchBox'}>
            <input
            className={'searchInput'}
            type={'search'}
            placeholder={'Search robots'}
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox