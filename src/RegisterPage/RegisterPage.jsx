import React from "react";
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Register.scss';


class RegisterPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                firstname: "",
                lastName: "",
                username: "",
                password: ""
            },
            submitted : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user, submitted } = this.state;
        return(
        <div className="containe">
                <div className="bg-form" style={{ backgroundImage:"url(/img/bg-01.jpg)"}}>
                    <div className="wrap-form">
                        <h2>Register</h2>
                        <form name="form" onSubmit={this.handleSubmit}>

                        {/* Create first name */}
                        <div className="form-mb">
                            <label htmlFor="firstname"> First Name</label>
                            <input
                            type="text" 
                            className="form-control"
                            name="firstname"
                            value={user.firstname}
                            placeholder="Enter your first name" 
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><FaUser/></span>
                            {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                            }
                        </div>

                        {/* Create last name */}
                        <div className="form-mb">
                            <label htmlFor="lastName"> Last Name</label>
                            <input
                            type="text" 
                            className="form-control"
                            name="firstname"
                            value={user.firstname}
                            placeholder="Enter your last name" 
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><FaUser/></span>
                            {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                            }
                        </div>
                        {/* Create form username */}
                        <div className="form-mb">
                            <label htmlFor="username"> Email</label>
                            <input
                            type="text" 
                            className="form-control"
                            name="username"
                            value={user.username}
                            placeholder="Enter your email" 
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><MdEmail/></span>
                            {submitted && !user.username &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>

                        {/* Create form password */}
                        <div className="form-mb">
                            <label htmlFor="password"> Password</label>
                            <input
                            type={"password"} 
                            className="form-control"
                            name="password"
                            value={user.password}
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                            />
                            <span className="focus-icon"><FaLock/></span>
                            {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                            {/* Button login */}
                            <div className="wrap-btn">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="btn-sign-up">
                                <span>Already have account?</span>
                                <Link to="/login" className="btn-link">Login</Link>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }

}

export default RegisterPage;