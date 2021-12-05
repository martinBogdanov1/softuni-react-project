import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="box">
                <div className="img-box">
                    <img src="images/p9.png" alt="" />
                    <div className="product_wrapper">
                        <Link to="#" className="add_cart_btn">
                            <div>
                                Add To Cart
                            </div>
                        </Link>
                        <Link to="#" className="add_cart_btn">
                            <div>
                                Details
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="detail-box">
                    <h5>
                        {props.product.name}
                    </h5>
                    <div className="product_info">
                        <h5>
                            <span>$</span> {props.product.price}
                        </h5>
                        <div className="star_container">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;