import React from "react"
import { Footer, Navbar } from "../../components"
import Productcards from "../../components/cards/productcards"
import Sidebar from "../../components/sidebar/sidebar"
import { useStateValue } from "../../context/products.context"
import "./productlist.css"

const ProductList = () => {
    const [_, dispatch] = useStateValue()
    return (
        <>
            <Navbar />
            <div className="filter-sort">
                <h3 className="sidebar-heading">FILTERS</h3>
                <h3
                    onClick={() => dispatch({ type: "CLEAR_FILTER" })}
                    className="sidebar-heading"
                    style={{
                        marginLeft: "4rem",
                        color: "gray",
                        cursor: "pointer",
                    }}
                >
                    Clear
                    <i
                        class="fa fa-close fa-lg"
                        style={{ marginLeft: "0.3rem" }}
                    ></i>
                </h3>
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
