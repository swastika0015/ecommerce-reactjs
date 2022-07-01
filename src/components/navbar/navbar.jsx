import './navbar.css'
import pic from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../context/cart-context'

const Navbar = () => {
    const [{ cartList }, dispatch] = useStateValue()
    return (
        <header>
            <div className="navbar">
                <div className="nav-items wrap flex-flow-row">
                    <Link to="/">
                        <div className="nav-item">
                            <img
                                src={pic}
                                height="40rem"
                                width="100rem"
                                alt="logo"
                            />
                        </div>
                    </Link>
                    <Link to="/productlist">
                        <div className="nav-item">Categories</div>
                    </Link>
                    <Link to="/productlist">
                        <div className="nav-item">Clothing</div>
                    </Link>
                    <Link to="/productlist">
                        <div className="nav-item">Brands</div>
                    </Link>
                    <Link to="/productlist">
                        <div className="nav-item">Beauty</div>
                    </Link>
                    <div className="search-container">
                        <form>
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                            <input
                                type="text"
                                placeholder="Search.."
                                name="search"
                            />
                        </form>
                    </div>
                    <div className="nav-items-right wrap flex-flow-row">
                        <Link to="/login">
                            <div className="nav-item">
                                <i
                                    className="fa fa-user fa-lg"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </Link>
                        <Link to="/whishlist">
                            <div className="nav-item">
                                <i
                                    className="fa fa-heart fa-lg"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </Link>
                        <Link to="/cart">
                            <div className="nav-item nav-cart-item">
                                <i
                                    className="fa fa-shopping-bag fa-lg"
                                    aria-hidden="true"
                                ></i>
                                <span class="badge">{cartList.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
