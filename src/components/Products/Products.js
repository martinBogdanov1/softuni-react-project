import { Link } from 'react-router-dom';
import Product from "./Product";
import './Products.css';
import { useState, useEffect } from 'react';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function setNewData() {
            const response = await fetch('http://localhost:5000/api/data/products');
            const data = await response.json();
            setProducts(data);
        }
        setNewData();
    }, []);


    return (
        <div className="bootstrap-iso">
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our Products
                        </h2>
                    </div>
                    <div className="row">
                        {
                            products.map(x => <Product key={x.name} product={x} />)
                        }
                    </div>
                    <div className="btn_box">
                        <Link to="#" className="view_more-link">
                            View More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products;