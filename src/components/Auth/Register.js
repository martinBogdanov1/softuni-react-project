import './Register.css';

import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';

import authService from '../../services/authService';
import { AuthContext } from '../../contexts/authContext';

const Register = ({ portalName }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const initialValues = { email: "", password: "", rePassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [requestError, setRequestError] = useState('');

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const data = formValues;
            authService.register(data, location.pathname)
                .then((userdata) => {
                    login(userdata);
                    navigate('/');
                })
                .catch(err => setRequestError(err.message));
        }
    }, [formErrors, requestError]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        } else if (!values.password !== !values.rePassword) {
            errors.password = "Passwords don't match";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    async function onRegisterSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    return (

        <section className="register">
            <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                        <div className="card-body">
                            <h2 className="title register-title">Register {portalName ? portalName : null}</h2>
                            <form onSubmit={onRegisterSubmit}>
                                <div className="row row-space register-form">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Email</label>
                                            <input
                                                className="input--style-4"
                                                type="text"
                                                name="email"
                                                onChange={handleChange} />
                                        </div>
                                        <p className="error">{formErrors.email ? formErrors.email : requestError}</p>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Password</label>
                                            <input
                                                className="input--style-4"
                                                type="password"
                                                name="password"
                                                onChange={handleChange} />
                                        </div>
                                        <p className="error">{formErrors.password}</p>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Re-Password</label>
                                            <input
                                                className="input--style-4"
                                                type="password"
                                                name="rePassword"
                                                onChange={handleChange} />
                                        </div>
                                        <p className="error">{formErrors.rePassword}</p>
                                    </div>
                                </div>
                                <div className="register-btn">
                                    <button className="btn btn--blue register-button" type="submit">Submit</button>
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