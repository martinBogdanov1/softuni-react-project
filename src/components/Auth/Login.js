import './Register.css';

import { useNavigate, useLocation, } from 'react-router-dom';
import { useContext, useState } from 'react';

import authService from '../../services/authService';
import { AuthContext } from '../../contexts/authContext';

const Login = ({ portalName }) => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [requestError, setRequestError] = useState('');

    async function onLoginHandler(e) {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        try {
            const userData = await authService.login(email, password, location.pathname);
            console.log(userData);
            login(userData);

            navigate('/');
        } catch (err) {
            setRequestError('Wrong email or password');
        }
    }

    return (
        <section className="register">
            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                        <div className="card-body">
                            <h2 className="title">Login {portalName ? portalName : null}</h2>
                            <form onSubmit={onLoginHandler}>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Email</label>
                                            <input className="input--style-4" type="email" name="email" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Password</label>
                                            <input className="input--style-4" type="password" name="password" />
                                        </div>
                                    </div>
                                </div>
                                <p className="error">{requestError}</p>
                                <div className="p-t-15">
                                    <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;