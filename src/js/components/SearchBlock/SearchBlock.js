import React, { Component } from 'react'
import { Filters } from './Filters'

export const SearchBlock = ({ changed, clicked }) => {
    return(
        <div className="search">
            <input placeholder="enter something" onChange={ changed }/>
            <button onClick={ clicked }>Search</button>
            <Filters />
        </div>
        )
};