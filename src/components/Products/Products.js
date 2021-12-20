import { useContext, useState, useEffect } from 'react';

import productService from '../../services/productService';
import wishlistService from '../../services/wishlistService';
import { AuthContext } from '../../contexts/authContext';
import Product from "./Product";

const Products = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [wishlistDataSate, setIsWished] = useState(null);

    useEffect(() => {
        if (user._id && user.role === 'user') {
            getWishlistData(user._id);
        }

        setNewData();
    }, []);

    function onDeleteHandler(data) {
        const newProducts = products.filter(x => x != data);

        setProducts(newProducts);
    }

    function onUpdateHandler(item) {
        setIsWished(item);
    }

    async function setNewData() {
        try {
            const products = await productService.getAll();
            setProducts(products);
        } catch (err) {
            console.log(err);
        }
    }

    async function getWishlistData(id) {
        const wishlistData = await wishlistService.getById(id);
        setIsWished(wishlistData);
    }

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container-fluid">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">All Products</h3>
                    <div className="row mt-lg-3 mt-0">
                        
                        <div className="left-ads-display col-lg-9">

                            <div className="row mt-lg-3 mt-0">

                                {products.map(x => {
                                    let isWished = false;

                                    if (wishlistDataSate && wishlistDataSate.products.includes(x._id)) {
                                        isWished = true;
                                    }

                                    return <Product key={x._id}
                                        data={x}
                                        wishlistDataSate={wishlistDataSate}
                                        onDeleteHandler={onDeleteHandler}
                                        onUpdateHandler={onUpdateHandler}
                                        isWished={isWished} />
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;