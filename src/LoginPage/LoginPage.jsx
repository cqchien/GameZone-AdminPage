import React from "react";
import { Link } from 'react-router-dom';
import './LoginPage.scss'
import { FaUser, FaLock } from 'react-icons/fa';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            submitted: false 
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

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return(
            <div className="container">

                <div className="bg-form" style={{ backgroundImage:"url(/img/bg-01.jpg)"}}>
                    <div className="wrap-form">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>

                        {/* Create form username */}
                        <div className="form-group mb-user">
                            <label htmlFor="username"> Username</label>
                            <input
                            type="text" 
                            className="form-control"
                            name="username"
                            placeholder="Enter your username" 
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><FaUser/></span>
                            {submitted && !username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>

                        {/* Create form password */}
                        <div className="form-group">
                            <label htmlFor="password"> Password</label>
                            <input
                            type="password" 
                            className="form-control"
                            name="password"
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><FaLock/></span>
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="forgot-right">
                            <Link to="/register" className="fg-password">Forgot password?</Link>
                        </div>
                        <div className="wrap-btn">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default LoginPage;