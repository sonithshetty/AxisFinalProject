// import { useState } from 'react';
// import { Link, Redirect} from 'react-router-dom';
// import classes from './index.module.css';
// import Cookies from "js-cookie";
// //import "react-toastify/dist/ReactToastify.css"
// //import { ToastContainer, toast } from 'react-toastify';

// function EmployeeLogin(){
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMsg, setErrorMsg] = useState('');

//     //const navigate = useNavigate();

//     const onSubmitSuccess = jwtToken => {
//         Cookies.set('jwt_token', jwtToken, {
//             expires: 30,
//             path: '/',
//         })
//         //toast.success("Succsessfully logged in");
//         return <Redirect to="/"/>;

//     }

//     const submitForm = async event => {
//         event.preventDefault();
//         const userDetails = {
//             username,
//             password
//         }

//         const url = "http://localhost:8093/authentication/login";
//         const options = {
//             method: "POST",
//             body: JSON.stringify(userDetails),
//             headers: {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*"
//             }
//         }
//         const response = await fetch(url, options);
//         const data = await response.json();
//         if (response.ok === true) {
//             onSubmitSuccess(data.token);
//             console.log(data.token);
//             alert("logged in sucssefully");
//         } else {
//             //toast.error("Failed to login");
//             setErrorMsg("*username and password incorrect");
//         }
//     }

//     const clearContents = () => {
//         setUsername("");
//         setPassword("");
//         setErrorMsg("");
//     }

//     return (
//         <div className={classes.container}>
//             <div>
//                 <img src='https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg' alt='login page' className={classes.loginImg} />
//             </div>
//             <div className={classes.item}>
//                 <h2 className={classes.title}>Employee Login Form</h2>
//                 <form onSubmit={submitForm} className={classes.form}>
//                     <div className={classes.control}>
//                         <label>Username</label>
//                         <input type='text' required id="username" value={username} placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />
//                     </div>
//                     <div className={classes.control}>
//                         <label>Password</label>
//                         <input type='password' required id="password" value={password} placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
//                     </div>

//                     <p>{errorMsg}</p>
//                     <div className={classes.actions}>
//                         <button type='submit'>Login</button>
//                         <button type='button' onClick={clearContents}>Clear</button>
//                     </div>
//                     <div>
//                         <Link to='/manegerlogin'> If you your maneger login here</Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default EmployeeLogin;

import { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { Link } from 'react-router-dom'

class EmployeeComponent extends Component {
    state = {
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
    }

    onChangeUsername = event => {
        this.setState({ username: event.target.value })
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    onSubmitSuccess = jwtToken => {
        const { history } = this.props

        Cookies.set('jwt_token', jwtToken, { expires: 30 })
        history.replace('/')
    }

    onSubmitFailure = errorMsg => {
        this.setState({ showSubmitError: true, errorMsg })
    }

    submitForm = async event => {
        event.preventDefault()
        const { username, password } = this.state
        const userDetails = { username, password }
        const url = 'http://localhost:8093/authentication/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess(data.token)
        } else {
            this.onSubmitFailure(data.error_msg)
            console.log(data)
        }
    }

    renderPasswordField = () => {
        const { password } = this.state
        return (
            <>
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    type="password"
                    id="password"
                    className="password-input-filed"
                    value={password}
                    onChange={this.onChangePassword}
                />
            </>
        )
    }

    renderUsernameField = () => {
        const { username } = this.state
        return (
            <>
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    type="text"
                    id="username"
                    className="username-input-filed"
                    value={username}
                    onChange={this.onChangeUsername}
                />
            </>
        )
    }

    render() {
        const { showSubmitError, errorMsg } = this.state
        return (
            <div className="login-form-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                    className="login-image"
                    alt="website login"
                />
                <form className="form-container" onSubmit={this.submitForm}>
                    <h1>Employee Login Form</h1>
                    <div className="input-container">{this.renderUsernameField()}</div>
                    <div className="input-container">{this.renderPasswordField()}</div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                    <Link to="/manegerlogin">If your Maneger Click here</Link>
                </form>
                
            </div>
        )
    }
}

export default EmployeeComponent;