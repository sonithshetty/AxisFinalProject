import {Component} from "react"
import ApiMethod from "../../context/ApiMethod"
import { FcSearch } from "react-icons/fc";
import "./index.css"

class FaxDetails extends Component {
    state = {
        customerId: ""
    }

    searchCustId = async() => {
        const url = ""
        const response = await fetch(url)
        const data = response.json()
    }

    cancelTheProcess = () => {
        this.setState({api: "--Select--", accountId: "", customerId:""})
    }

    changeCustId = event => {
        this.setState({customerId: event.target.value})
    }

    changePath = () => {
        const{history} = this.props
        history.replace("/total-faxes")
    }

    render(){
        const{ customerId} = this.state
        return(
            <ApiMethod.Consumer>
            {value => {
                const{api, accountId, accountIdMethod, custIdMethod} = value

                const changeAccountId = event => {
                    accountIdMethod(event.target.value)
                }

                const addCustId = () => {
                    custIdMethod(customerId)
                    this.changePath()
                }

                return(
                    <div className="email-container">
                <h1 className="email-heading">Fax/Email Indemnity</h1>
                <div className="fax-api-method">
                    <div className="api-method-container">
                    <p className="email-function">Function<span className="email-function-star">*</span></p>
                    <select value={api}  className="email-select">
                        <option>{api}</option>
                    </select>
                    </div>
                    <div className="account-container">
                    <label htmlFor="acount-id" className="account-label">Account Id<span className="email-function-star">*</span></label>
                    <input id="acount-id" type="number" value={accountId} className="account-input" onChange={changeAccountId}/>
                    <button className="searchButton" type="button" onClick={this.searchCustId}>
                        <FcSearch />
                    </button>
                    <label htmlFor="cusrt-id" className="cust-label">Cust Id</label>
                    <input id="cusrt-id"  type="number" value={customerId} className="cust-input" onChange={this.changeCustId}/>
                    </div>
                </div>
                <button type="button" className="go-button" onClick={addCustId}>Go</button>
                <button type="button" className="go-button-2" onClick={this.cancelTheProcess}>Cancel</button>
            </div>
                )
            }}
            </ApiMethod.Consumer>
        )
    }
}
export default FaxDetails