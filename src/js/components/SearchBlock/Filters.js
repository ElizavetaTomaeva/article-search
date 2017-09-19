import React from 'react'

export const Filters = ({sortByContent, sortByDate}) => {
    return (
        <div className="filter">
            <select >
                <option>Headline</option>
                <option>Lead</option>
                <option>Article</option>
            </select>
            <select >
                <option>Newest</option>
                <option>Oldest</option>
            </select>
        </div>
    )
};