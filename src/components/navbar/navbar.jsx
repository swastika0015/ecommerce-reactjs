import "./navbar.css";
import pic from "../../assets/logo.png";

const Navbar = () => {
    return (

        <header>
        <div className="navbar">
            <div className="nav-items flex-flow-row">
                <div className="nav-item"><img src={pic} height="40rem" width="100rem"/></div>
                <div className="nav-item">Categories</div>
                <div className="nav-item">Clothing</div>
                <div className="nav-item">Brands</div>
                <div className="nav-item">Beauty</div>
                <div className="search-container">
                    <form>
                      <button type="submit"><i className="fa fa-search"></i></button>
                      <input type="text" placeholder="Search.." name="search"/>
                    </form>
                  </div>
                  <div className="nav-items-right flex-flow-row">
                    <div className="nav-item"><i className="fa fa-user fa-lg" aria-hidden="true"></i></div>
                    <div className="nav-item"><i className="fa fa-heart fa-lg" aria-hidden="true"></i></div>
                    <div className="nav-item"><i className="fa fa-shopping-bag fa-lg" aria-hidden="true"></i></div>                     
                  </div>
            </div>
        </div>
    </header>

    );
};

export default Navbar;