import { Link } from "react-router-dom";
import ManegerNavbar from "./ManegerNavbar";

export default function ManegerHome() {
    return (
        <div>
            <ManegerNavbar/>
            <div>
                <h1>Welcome to Indeminity maintaince</h1>
                <Link to={"/manegerlogin"}>Maneger</Link>
            </div>
        </div>
    )
}