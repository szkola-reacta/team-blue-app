import React from 'react'

import Search from './../Search'
import CategoryList from '../CategoryList'

const Home = ({categories}) => {
    return (
        <div>
            <Search />
            <CategoryList categories={categories} />
        </div>
    )
}

export default Home
