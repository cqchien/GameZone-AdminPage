import React from "react";
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.scss';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            submitted : false,
            isShowPwd : false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { username, password } = this.state;

        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {

        // const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        const isShowPwd = this.state.isShowPwd;
        return(
            <div className="container">

                <div className="bg-form" style={{ backgroundImage:"url(/img/bg-01.jpg)"}}>
                    <div className="wrap-form">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>

                        {/* Create form username */}
                        <div className="form-group mb-user">
                            <label htmlFor="username"> Email</label>
                            <input
                            type="text" 
                            className="form-control"
                            name="username"
                            value={username}
                            placeholder="Enter your email" 
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><FaUser/></span>
                            {submitted && !username &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>

                        {/* Create form password */}
                        <div className="form-group pwd">
                            <label htmlFor="password"> Password</label>
                            <input
                            type={isShowPwd ? "text" : "password"} 
                            className="form-control"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                            />

                            {/* Add icon show-hide password */}
                            <img
                            title={isShowPwd ?  "Show password" : "Hide password"}
                            src={isShowPwd ? '/img/show-password.png' : '/img/hide-password.png'}
                            alt="Show-HidePwd"
                            onClick={() => this.setState(prevState => ({isShowPwd: !prevState.isShowPwd}))}
                            />

                            <span className="focus-icon"><FaLock/></span>
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                            <div className="forgot-right">
                                <Link to="/" className="btn-link">Forgot password?</Link>
                            </div>

                            {/* Button login */}
                            <div className="wrap-btn">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="btn-sign-up">
                                <span>Don't have an account?</span>
                                <Link to="/register" className="btn-link">Sign Up</Link>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default LoginPage;