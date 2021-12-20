import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';
import productService from '../../services/productService';


const Create = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [description, setDescription] = useState('');


    function onOnchangeDescription(e) {
        setDescription(e.currentTarget.value);
    }

    async function onCreateSumbit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        data.ownerId = user._id;
        data.description = description;
        try {
            await productService.create(data, user.accessToken);
            navigate('/products');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="register">
            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                        <div className="card-body">
                            <h2 className="title">Create Item</h2>
                            <form onSubmit={onCreateSumbit}>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Band name</label>
                                            <input className="input--style-4" type="text" name="bandName" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Item name</label>
                                            <input className="input--style-4" type="text" name="title" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Image url</label>
                                            <input className="input--style-4" type="text" name="imageUrl" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Price</label>
                                            <input className="input--style-4" type="Number" name="price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row-description">
                                    <div className="input-group description">
                                        <label htmlFor="description" className="label">Description</label>
                                        <textarea onChange={onOnchangeDescription} className="input--style-4" id="description" rows="4" cols="50" />
                                    </div>
                                </div>
                                <div className="p-t-15">
                                    <button className="btn btn--radius-2 btn--blue" type="submit">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Create;