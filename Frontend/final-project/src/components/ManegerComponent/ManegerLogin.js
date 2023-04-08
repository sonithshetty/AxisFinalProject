import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './ManegerLogin.module.css';
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify';

function ManegerLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    const onSubmitSuccess = jwtToken => {
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/manegerhome',
        })
        toast.success("Succsessfully logged in");
        navigate('/manegerhome');
        
    }

    const submitForm = async event => {
        event.preventDefault();
        const userDetails = {
            username,
            password
        }

        const url = "http://localhost:8093/authentication/login";
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok === true) {
            onSubmitSuccess(data.token);
            console.log(data.token);
            alert("logged in sucssefully");
        } else {
            toast.error("Failed to login");
            setErrorMsg("*username and password incorrect");
        }
    }

    const clearContents = () => {
        setUsername("");
        setPassword("");
        setErrorMsg("");
    }

    return (
        <div className={classes.container}>
            <div>
                <img src='https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg' alt='login page' className={classes.loginImg} />
            </div>
            <div className={classes.item}>
                <h2 className={classes.title}>Maneger Login Form</h2>
                <form onSubmit={submitForm} className={classes.form}>
                    <div className={classes.control}>
                        <label>Username</label>
                        <input type='text' required id="username" value={username} placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Password</label>
                        <input type='password' required id="password" value={password} placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <ToastContainer/>
                    <p>{errorMsg}</p>
                    <div className={classes.actions}>
                        <button type='submit'>Login</button>
                        <button type='button' onClick={clearContents}>Clear</button>
                    </div>
                    <div>
                        <Link to='/employeelogin'> If you your employee login here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ManegerLogin;