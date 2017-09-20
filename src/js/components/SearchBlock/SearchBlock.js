import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './Filters'

export const SearchBlock = ({ changed, clicked }) => {
    return(
        <div className="search">
            <input placeholder="enter something" onChange={ changed }/>
            <Link to="/"><button onClick={ clicked }>Search</button></Link>
            <Filters />
        </div>
        )
};