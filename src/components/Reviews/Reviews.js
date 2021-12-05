import Review from "./Review";

const Reviews = () => {
    return (
        <section className="client_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        What Says Our Customers
                    </h2>
                </div>
            </div>
            <div className="client_container ">
                <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <Review />
                    </div>
                    <div className="carousel_btn-box">
                        <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                            <span>
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                            </span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                            <span>
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;