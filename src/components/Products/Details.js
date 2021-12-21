import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import productService from '../../services/productService';
import wishlistService from '../../services/wishlistService';
import { AuthContext } from '../../contexts/authContext';

const Details = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [wishData, setWishData] = useState(null);
    const { pid } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user._id && user.role === 'user') {
            getWishlistData(user._id);
        }

        setData();
    }, []);

    async function setData() {
        const data = await productService.getById(pid);
        setProduct(data);
    }

    async function getWishlistData(id) {
        const wishlistData = await wishlistService.getById(id);
        setWishData(wishlistData);

    }

    async function wishlistHandler() {
        let wishItem = {
            userId: user._id,
            products: [product._id]
        }

        if (wishData) {
            wishItem.products = [...wishData.products, product._id];
            const newWishlistData = { ...wishData, products: wishItem.products };
            setWishData(newWishlistData);
        }

        await wishlistService.create(wishItem, user.accessToken);
        setWishData(wishItem);
    }

    async function deleteHandler(e) {
        try {
            await productService.remove(product._id, user.accessToken);
            navigate('/products');
        } catch (err) {
            console.log(err);
        }
    }


    let adminButtons = <><Link to={`/product/edit/${product._id}`} className="googles-cart pgoogles-cart edit"><button type="submit" className="googles-cart pgoogles-cart">Edit</button></Link>
        <button onClick={deleteHandler} type="submit" className="googles-cart pgoogles-cart">Delete</button>
    </>

    let userButtons = <button onClick={wishlistHandler} type="submit" className="googles-cart pgoogles-cart">Add To Wishlist</button>

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container">
                <div className="inner-sec-shop pt-lg-4 pt-3">
                    <div className="row">
                        <div className="col-lg-4 single-right-left ">
                            <div className="grid images_3_of_2">
                                <div className="thumb-image"> <img src={product.imageUrl} data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                            </div>
                        </div>
                        <div className="col-lg-8 single-right-left simpleCart_shelfItem">
                            <h3>{`${product.bandName} ${product.title}`}</h3>
                            <p><span className="item_price">${product.price}</span>
                            </p>
                            <div className="occasion-cart">
                                <div className="googles single-item singlepage">
                                    {user.role ?
                                        user.role === 'admin'
                                            ? user._id === product.ownerId
                                                ? adminButtons
                                                : null
                                            : wishData && wishData.products.includes(product._id)
                                                ? <div>ASdasdsad</div>
                                                : userButtons
                                        : null

                                    }

                                </div>
                            </div>
                            <ul className="footer-social text-left mt-lg-4 mt-3">
                                <li>Share On : </li>
                                <li className="mx-2">
                                    <a href="#">
                                        <span className="fab fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="#">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="#">
                                        <span className="fab fa-google-plus-g"></span>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="#">
                                        <span className="fab fa-linkedin-in"></span>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="#">
                                        <span className="fas fa-rss"></span>
                                    </a>
                                </li>

                            </ul>

                        </div>
                        <div className="clearfix"> </div>

                        <div className="responsive_tabs">
                            <div id="horizontalTab">
                                <div className="resp-tabs-container">
                                    <div className="tab1">
                                        <div className="single_page">
                                            <h6>Description</h6>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </section>
    )
}

export default Details;