import { Link } from "react-router-dom";
import EmployeeNavbar from "./EmployeeNavbar";

export default function EmployeeHome() {
    return (
        <div>
            <EmployeeNavbar />
            <div>
                <h1>Welcome to Indeminity maintaince</h1>
                <Link to={"/employeelogin"}>Employee</Link>
            </div>
        </div>
    )
}