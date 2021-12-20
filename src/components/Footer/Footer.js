import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return (
        <footer className="py-lg-5 py-3">
            <div className="container-fluid px-lg-5 px-3">
                <div className="row footer-top-w3layouts">
                    <div className="col-lg-3 footer-grid-w3ls">
                        <div className="footer-title">
                            <h3>About Us</h3>
                        </div>
                        <div className="footer-text">
                            <p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at
                                tellus. Nulla porttitor accumsana tincidunt.</p>
                            <ul className="footer-social text-left mt-lg-4 mt-3">

                                <li className="mx-2">
                                    <Link to="#">
                                        <span className="fab fa-facebook-f"></span>
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="#">
                                        <span className="fab fa-twitter"></span>
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="#">
                                        <span className="fab fa-google-plus-g"></span>
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="#">
                                        <span className="fab fa-linkedin-in"></span>
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="#">
                                        <span className="fas fa-rss"></span>
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="#">
                                        <span className="fab fa-vk"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 footer-grid-w3ls">
                        <div className="footer-title">
                            <h3>Get in touch</h3>
                        </div>
                        <div className="contact-info">
                            <h4>Location :</h4>
                            <p>0926k 4th block building, king Avenue, New York City.</p>
                            <div className="phone">
                                <h4>Contact :</h4>
                                <p>Phone : +121 098 8907 9987</p>
                                <p>Email :
                                    <Link to="mailto:info@example.com">info@example.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 footer-grid-w3ls">
                        <div className="footer-title">
                            <h3>Quick Links</h3>
                        </div>
                        <ul className="links">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="404.html">Error</Link>
                            </li>
                            <li>
                                <Link to="/products">Shop</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-3 footer-grid-w3ls">
                        <div className="footer-title">
                            <h3>Sign up for your offers</h3>
                        </div>
                        <div className="footer-text">
                            <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                            <form action="#" method="post">
                                <input className="form-control" type="email" name="Email" defaultValue="Enter your email..." required="" />
                                <button className="btn1">
                                    <i className="far fa-envelope" aria-hidden="true"></i>
                                </button>
                                <div className="clearfix"> </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright-w3layouts mt-4">
                    <p className="copy-right text-center ">&copy; 2018 Goggles. All Rights Reserved | Design by
                        <Link to="http://w3layouts.com/"> W3layouts </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;