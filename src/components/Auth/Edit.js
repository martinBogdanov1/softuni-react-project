import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';
import productService from '../../services/productService';


const Edit = () => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [product, setProduct] = useState({});
    const [description, setDescription] = useState('');
    const { pid } = useParams();

    useEffect(() => {
        async function setData() {
            const data = await productService.getById(pid);
            setProduct(data);
            setDescription(data.description);
        }
        setData();
    }, []);


    function onOnchangeDescription(e) {
        setDescription(e.currentTarget.value);
    }

    async function onEditSubmit(e) {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.currentTarget));
        newData.description = description;

        try {
            await productService.edit(newData, pid, user.accessToken);
            navigate('/products');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className="register">
            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                        <div className="card-body">
                            <h2 className="title">Edit Item</h2>
                            <form onSubmit={onEditSubmit}>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Band name</label>
                                            <input className="input--style-4" type="text" name="bandName" defaultValue={product.bandName || ''} />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Item name</label>
                                            <input className="input--style-4" type="text" name="title" defaultValue={product.title || ''} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Image url</label>
                                            <input className="input--style-4" type="text" name="imageUrl" defaultValue={product.imageUrl || ''} />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Price</label>
                                            <input className="input--style-4" type="Number" name="price" defaultValue={product.price || ''} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row-description">
                                    <div className="input-group description">
                                        <label htmlFor="description" className="label">Description</label>
                                        <textarea onChange={onOnchangeDescription} className="input--style-4" id="description" rows="4" cols="50" defaultValue={product.description || ''} />
                                    </div>
                                </div>
                                <div className="p-t-15">
                                    <button className="btn btn--radius-2 btn--blue" type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Edit;