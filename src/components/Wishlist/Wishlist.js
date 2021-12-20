import { useContext, useState, useEffect } from 'react';

import productService from '../../services/productService';
import wishlistService from '../../services/wishlistService';
import { AuthContext } from '../../contexts/authContext';
import WishlistProduct from './WishlistProduct';

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [productsState, setProducts] = useState([]);

    useEffect(() => {
        getWishlistData(user._id);
    }, []);

    function onDeleteHandler(id) {
        const newProducts = productsState.filter(x => x._id != id);
        setProducts(newProducts);
    }

    async function getWishlistData(id) {
        const wishlistData = await wishlistService.getById(id);
        const products = await productService.getMany(wishlistData.products, user.accessToken);
        setProducts(products);
    }

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container-fluid">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">Wishlist</h3>
                    <div className="row mt-lg-3 mt-0">
                        <div className="left-ads-display col-lg-9">
                            <div className="row mt-lg-3 mt-0">
                                {productsState.map(x => {
                                    return <WishlistProduct key={x._id}
                                        data={x}
                                        onDeleteHandler={onDeleteHandler} />
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wishlist;