import './Register.css';
import authService from '../../services/authService';

const Login = () => {
    async function onLoginHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        const user = await authService.login(email, password);
    }

    return (
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title">Login</h2>
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
                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;