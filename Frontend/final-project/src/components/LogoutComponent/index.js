import { withRouter } from "react-router-dom"
import Cookies from "js-cookie"

const LogoutComponet = (props) => {

    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        Cookies.remove('jwt_token1')
        const { history } = props

        const jwtToken = Cookies.get("jwt_token")
        if (jwtToken === undefined) {
            history.replace('/employeelogin')
        }
    }

    return (
        <div>
            <button type="button" onClick={onClickLogout}>Logout</button>
        </div>
    )
}

export default withRouter(LogoutComponet);