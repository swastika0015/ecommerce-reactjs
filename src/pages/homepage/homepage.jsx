import React from 'react'
import pic from '../../assets/main.jpg'
import { Footer, MainPageCard, Navbar } from '../../components/index'
import './homepage.css'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <section className="section">
                <div className="main-container">
                    <img className="img-main" src={pic} alt="home hero"/>
                </div>
                <MainPageCard />
            </section>
            <Footer />
        </div>
    )
}
export default Homepage
