import React from "react";
import pic from "../assets/main.jpg";
import "./homepage.css";
import {Navbar, Footer, Mainpagecard } from '../components/index';



const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <section>
                <div className="main-container">
                    <img className="img-container" src={pic}/>
                </div>
                <Mainpagecard />
            </section>
            <Footer/>
        </div>
    )
}
export default Homepage;