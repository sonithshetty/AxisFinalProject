import { Link, useNavigate } from "react-router-dom";
import classes from './EmployeeNavbar.module.css';
import Cookies from 'js-cookie'

function EmployeeNavbar(){

    const navigate = useNavigate();
    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        navigate('/employeelogin');
    }

    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to='/'><h2>Indeminity Maintaince</h2></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/generate'>Generate Password</Link>
                    </li>
                    <li>
                        <Link to='/checkstrength'>Check Strength</Link>
                    </li>
                    <li>
                        <button type="button" onClick={onClickLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default EmployeeNavbar;