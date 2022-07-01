import React from 'react'
import './productlist.css'
import { Navbar } from '../../components'
import { Footer } from '../../components'
import Sidebar from '../../components/sidebar/sidebar'
import Productcards from '../../components/cards/productcards'

const ProductList = () => {
    return (
        <>
            <Navbar />
            <div className="filter-sort">
                <h3 className="sidebar-heading">FILTERS</h3>
            </div>
            <section>
                <div className="main-container flex-flow-row">
                    <Sidebar />

                    <Productcards />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductList
