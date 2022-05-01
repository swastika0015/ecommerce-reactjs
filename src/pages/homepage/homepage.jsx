import React from "react";
import pic from "../../assets/main.jpg";
import "./homepage.css";
import {Navbar, Footer, Mainpagecard } from '../../components/index';



const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <section className="section">
                <div className="main-container">
                    <img className="img-main" src={pic}/>
                </div>
                <Mainpagecard />
            </section>
            <Footer/>
        </div>
    )
}
export default Homepage;