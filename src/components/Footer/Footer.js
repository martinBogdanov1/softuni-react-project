import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return (
        <div className="bootstrap-iso">
            <section className="info_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_contact">
                                <h5>
                                    <Link to="/home" className="navbar-brand">
                                        <span>
                                            Minics
                                        </span>
                                    </Link>
                                </h5>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    Address
                                </p>
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    +01 1234567890
                                </p>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    demo@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_info">
                                <h5>
                                    Information
                                </h5>
                                <p>
                                    Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim nulla iste maxime corrupti ad illo libero minus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_links">
                                <h5>
                                    Useful Link
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="/home">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/products">
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/why-us">
                                            Why Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/reviews">
                                            Testimonial
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <form action="">
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        Subscribe
                                    </button>
                                </form>
                                <div className="social_box">
                                    <a href="https://facebook.com">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://twitter.com">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://youtube.com">
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <Link to="https://html.design/">Free Html Templates</Link>
                    </p>
                </div>
            </footer>
        </div >
    );
}

export default Footer;