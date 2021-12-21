import { Link, } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import wishlistService from '../../services/wishlistService'
import { AuthContext } from '../../contexts/authContext';

const WishlistProduct = ({
    data,
    onDeleteHandler
}) => {
    const { user } = useContext(AuthContext);
    const [popUp, setPopup] = useState(false);
    const [itemData, setItemData] = useState({});

    useEffect(() => {
        setItemData(data);
    }, []);

    async function deleteHandler() {
        try {
            await wishlistService.remove(user._id, itemData._id, user.accessToken);

            onDeleteHandler(itemData._id);
        } catch (err) {
            console.log(err);
        }
    }

    function popUpHandler() {
        console.log(!popUp);
        setPopup(!popUp);
    }

    let userButtons = <button onClick={popUpHandler} className="googles-cart pgoogles-cart"><i className="fas fa-trash-alt"></i></button>;

    let popUpButtons = <><button onClick={deleteHandler} className="googles-cart pgoogles-cart edit"><i className="fas fa-check"></i></button>
        <button onClick={popUpHandler} className="googles-cart pgoogles-cart"><i className="fas fa-times-circle"></i></button>
    </>;

    return (
        < div className="col-md-3 product-men women_two shop-gd my-lg-3 my-0" >
            <div className="product-googles-info googles">
                <div className="men-pro-item">
                    <div className="men-thumb-item">
                        <img src={itemData.imageUrl} className="img-fluid" alt="" />
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <Link to={`/product/${itemData._id}`} className="link-product-add-cart">Quick View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item-info-product">
                        <div className="info-product-price">
                            <div className="grid_meta">
                                <div className="product_price">
                                    <h4>
                                        <Link to={`/product/${itemData._id}`}>{`${itemData.bandName} ${itemData.title}`} </Link>
                                    </h4>
                                    <div className="grid-price mt-2">
                                        <span className="money">{itemData.price} $</span>
                                    </div>
                                </div>
                            </div>
                            <div className="googles single-item hvr-outline-out">
                                {
                                    popUp
                                        ? popUpButtons
                                        : userButtons
                                }
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default WishlistProduct;