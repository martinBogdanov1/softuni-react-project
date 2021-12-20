import './Register.css';

import { useNavigate, useLocation  } from "react-router-dom";
import { useContext } from 'react';

import authService from '../../services/authService';
import { AuthContext } from '../../contexts/authContext';

const Register = ({ portalName }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    async function onRegisterSubmit(e) {
        e.preventDefault();

        try {
            const data = Object.fromEntries(new FormData(e.currentTarget));
            const userData = await authService.register(data, location.pathname);
            login(userData);

            navigate('/');
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
                            <h2 className="title">Registration {portalName ? portalName : null}</h2>
                            <form onSubmit={onRegisterSubmit}>
                                {!portalName
                                    ? <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">first name</label>
                                                <input className="input--style-4" type="text" name="firstName" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">last name</label>
                                                <input className="input--style-4" type="text" name="lastName" />
                                            </div>
                                        </div>
                                    </div>
                                    : null
                                }
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

export default Register;