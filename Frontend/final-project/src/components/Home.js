import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Welcome to Indeminity maintaince</h1>
            <Link to={"/employeelogin"}>Employee</Link>
            <Link to={"/manegerlogin"}>Maneger</Link>
        </div>
    )
}