import { Link } from "react-router-dom";
// import './About.css';

const About = () => {
    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container-fluid">

                <div className="inner-sec-shop px-lg-4 px-3">
                    <div className="about-content py-lg-5 py-3">
                        <div className="row">

                            <div className="col-lg-6 p-0">
                                <img src="images/banner5.jpg" alt="Goggles" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 about-info">
                                <h3 className="tittle-w3layouts text-left mb-lg-5 mb-3">About Us</h3>
                                <p className="my-xl-4 my-lg-3 my-md-4 my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                </p>

                                <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>

                            </div>
                        </div>
                    </div>

                    <div className="row galsses-grids pt-lg-5 pt-3">
                        <div className="col-lg-6 galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="images/banner4.jpg" alt="" className="img-fluid" />
                                <figcaption>
                                    <h3>Editor's
                                        <span>Pick</span>
                                    </h3>
                                    <p> Express your style now.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-6 galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="images/banner1.jpg" alt="" className="img-fluid" />
                                <figcaption>
                                    <h3>Editor's
                                        <span>Pick</span>
                                    </h3>
                                    <p>Express your style now.</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="testimonials p-lg-5 p-3 mt-4">
                        <div className="row last-section">
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Genuine Product</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Secure Products</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Cash on Delivery</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Easy Delivery</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;