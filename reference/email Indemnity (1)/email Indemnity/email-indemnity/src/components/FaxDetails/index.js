import {Component} from "react"
import Cookies from "js-cookie";
import { FcSearch } from "react-icons/fc";
import "./index.css"

class FaxDetails extends Component {
    state = {
        accountId: "",
        customerId: ""
    }

    searchCustId = async() => {
        const url = ""
        const response = await fetch(url)
        const data = response.json()
    }

    cancelTheProcess = () => {
        this.setState({accountId: "", customerId:""})
    }

    changeCustId = event => {
        //api call
        this.setState({customerId: event.target.value})
    }

    changePath = () => {
        const{history} = this.props
        const{accountId, customerId} = this.state
        Cookies.set("js-accountId", accountId, {expires: 7})
        Cookies.set("js-custId", customerId, {expires: 7})
        history.replace("/total-faxes")
    }

    changeAccountId = event => {
       this.setState({accountId: event.target.value})
    }


    render(){
        const{accountId, customerId} = this.state
        const api = Cookies.get("js-method")
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
            <input id="acount-id" type="number" value={accountId} className="account-input" onChange={this.changeAccountId}/>
            <button className="searchButton" type="button" onClick={this.searchCustId}>
                <FcSearch />
            </button>
            <label htmlFor="cusrt-id" className="cust-label">Cust Id</label>
            <input id="cusrt-id"  type="number" value={customerId} className="cust-input" onChange={this.changeCustId}/>
            </div>
        </div>
        <button type="button" className="go-button" onClick={this.changePath}>Go</button>
        <button type="button" className="go-button-2" onClick={this.cancelTheProcess}>Cancel</button>
    </div>
                )
           
    }
}
export default FaxDetails