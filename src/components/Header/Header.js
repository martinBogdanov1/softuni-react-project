import { Link, useNavigate } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import { useContext } from 'react';

import './Header.css';
import { AuthContext } from '../../contexts/authContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function onLogoutHandler(e) {
        e.preventDefault();
        logout();
        navigate('/');
    }

    let publicButtons = (
        <ul className="cart-inner-info"><li className="galssescart galssescart2 cart cart box_1">
            <Link className="top_googles_cart" to="/login">
                Login
                <i className="fas fa-sign-in-alt"></i>
            </Link>
        </li>
            <li className="galssescart galssescart2 cart cart box_1">
                <Link className="top_googles_cart" to="/register">
                    Register
                    <i className="fas fa-user-plus"></i>
                </Link>
            </li>
        </ul>
    );

    let privateButtons = (
        <ul className="cart-inner-info">
            {
                user.role === 'admin'
                    ? <li className="galssescart galssescart2 cart cart box_1">
                        <Link className="top_googles_cart" to="/create">
                            Create
                            <i className="fas fa-compact-disc"></i>
                        </Link>
                    </li>
                    : <li className="galssescart galssescart2 cart cart box_1">
                        <Link className="top_googles_cart" to="/wishlist">
                            Wishlist
                            <i className="fas fa-compact-disc"></i>
                        </Link>
                    </li>
            }
            <li className="galssescart galssescart2 cart cart box_1">
                <Link onClick={onLogoutHandler} className="top_googles_cart" to="/logout">
                    Logout
                    <i className="fas fa-sign-out-alt"></i>
                </Link>
            </li>
        </ul>
    );

    return (
        <div className="banner-top container-fluid" id="home">
            <header>
                <div className="row">
                    <div className="col-md-3 top-info text-left mt-lg-4">
                        <ul>
                            <li className="galssescart galssescart2 cart cart box_1">
                                {
                                    !user._id
                                        ? <Link className="top_googles_cart" to="/login-admin">
                                            admin
                                            <i className="fas fa-compact-disc"></i>
                                        </Link>
                                        : null
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 logo-w3layouts text-center">
                        <h1 className="logo-w3layouts">
                            <Link className="navbar-brand" to="/home">
                                VinylStore <i className="fas fa-record-vinyl"></i></Link>
                        </h1>
                    </div>

                    <div className="col-md-3 top-info-cart text-right mt-lg-4">
                        {user._id
                            ? privateButtons
                            : publicButtons
                        }
                    </div>
                </div>
                <div className="search">
                    <div className="mobile-nav-button">
                        <button id="trigger-overlay" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <div className="overlay overlay-door">
                        <button type="button" className="overlay-close">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <form action="#" method="post" className="d-flex">
                            <input className="form-control" type="search" defaultValue="Search here..." required="" />
                            <button type="submit" className="btn btn-primary submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                    </div>

                </div>
                <label className="top-log mx-auto"></label>
                <nav className="navbar navbar-expand-lg navbar-light bg-light top-header mb-2">

                    <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">

                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-mega mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link ml-lg-0" to="/home">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact.html">Bands</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
            <ScriptTag src="js/modernizr-2.6.2.min.js" />
            <ScriptTag src="js/classie-search.js" />
            <ScriptTag src="js/demo1-search.js" />
        </div>
    );
}


export default Header;