import { Link } from 'react-router-dom'
// import './Home.css';
const Home = () => {

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="banner">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="carousel-caption text-center">
                                <h3>CLUTCH</h3>
                                <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                            </div>
                        </div>
                        <div className="carousel-item item2">
                            <div className="carousel-caption text-center">
                                <h3>CROBOT</h3>
                                <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                            </div>
                        </div>
                        <div className="carousel-item item3">
                            <div className="carousel-caption text-center">
                                <h3>THE TEMPERANCE MOVEMENT</h3>
                                <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                            </div>
                        </div>
                        <div className="carousel-item item4">
                            <div className="carousel-caption text-center">
                                <h3>DEWOLFF</h3>
                                <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container-fluid">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <div className="bottom-sub-grid-content py-lg-5 py-3">
                        <div className="row">
                            <div className="col-lg-4 bottom-sub-grid text-center">
                                <div className="bt-icon">

                                    <span className="far fa-hand-paper"></span>
                                </div>

                                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">Satisfaction Guaranteed</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                <p>
                                    <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                                </p>
                            </div>
                            <div className="col-lg-4 bottom-sub-grid text-center">
                                <div className="bt-icon">
                                    <span className="fas fa-rocket"></span>
                                </div>

                                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">Fast Shipping</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                <p>
                                    <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                                </p>
                            </div>
                            <div className="col-lg-4 bottom-sub-grid text-center">
                                <div className="bt-icon">
                                    <span className="far fa-sun"></span>
                                </div>

                                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">UV Protection</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                <p>
                                    <Link to="/products" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;