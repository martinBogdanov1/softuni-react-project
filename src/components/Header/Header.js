import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="bootstrap-iso">
            <header className="header_section">
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="top_nav_container">
                            <div className="contact_nav">
                                <Link to="#">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </Link>
                            </div>
                            <form className="search_form">
                                <input type="text" className="form-control" placeholder="Search here..." />
                                <button className="" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                            <div className="user_option_box">
                                <Link to="/register" className="account-link">
                                    <i className="fas fa-user-plus" aria-hidden="true"></i>
                                    <span>
                                        Register
                                    </span>
                                </Link>
                                <Link to="/login" className="account-link">
                                    <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                                    <span>
                                        Login
                                    </span>
                                </Link>
                                <Link to="" className="account-link">
                                    <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                                    <span>
                                        logout
                                    </span>
                                </Link>
                                <Link to="/cart" className="cart-link">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span>
                                        Cart
                                    </span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link className="navbar-brand" to="/home">
                                <span>
                                    Minics
                                </span>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item ">
                                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about-us">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/products">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/why-us">Why Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/reviews">Testimonial</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header >
        </div>
    );
}


export default Header;