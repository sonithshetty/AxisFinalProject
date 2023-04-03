import { Component } from "react"
import Cookies from "js-cookie";
import { FcSearch } from "react-icons/fc";
import "./index.css"
import Axios from "axios";

class FaxDetails extends Component {
    state = {
        accountId: "",
        customerId: "",
        indemenity: [
            {
                id: 1,
                name: "imran",
                email: "imran@email.com",
                faxNumber: 489562,
                refNumber: "48694",
            },
            {
                id: 2,
                name: "sonit",
                email: "sonit@email.com",
                faxNumber: 489563,
                refNumber: "48694",
            }

        ],
    }

    //const [accountDetails, setAccountDetails] = useSate([]);

    searchCustId = async () => {
        const { accountId, indemenity } = this.state;
        const url = "http://localhost:8094/accounts/" + accountId
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options);
        const data = await response.json()
        this.setState({ customerId: data.customerId })
        console.log(data);
        console.log(indemenity)
    }

    cancelTheProcess = () => {
        this.setState({ accountId: "", customerId: "" })
    }

    changeCustId = event => {
        //api call
        this.setState({ customerId: event.target.value })
    }

    changePath = () => {
        const { history } = this.props
        const { accountId, customerId } = this.state
        Cookies.set("js-accountId", accountId, { expires: 7 })
        Cookies.set("js-custId", customerId, { expires: 7 })
        history.replace("/total-faxes")
    }

    changeAccountId = event => {
        this.setState({ accountId: event.target.value })
    }


    render() {
        const { accountId, customerId, indemenity } = this.state
        const api = Cookies.get("js-method")
        return (
            <div className="email-container">
                <h1 className="email-heading">Fax/Email Indemnity</h1>
                <div className="fax-api-method">
                    <div className="api-method-container">
                        <p className="email-function">Function<span className="email-function-star">*</span></p>
                        <select value={api} className="email-select">
                            <option>{api}</option>
                        </select>
                    </div>
                    <div className="account-container">
                        <label htmlFor="acount-id" className="account-label">Account Id<span className="email-function-star">*</span></label>
                        <input id="acount-id" type="number" value={accountId} className="account-input" onChange={this.changeAccountId} />
                        <button className="searchButton" type="button" onClick={this.searchCustId}>
                            <FcSearch />
                        </button>
                        <label htmlFor="cusrt-id" className="cust-label">Cust Id</label>
                        <input id="cusrt-id" type="number" value={customerId} className="cust-input" onChange={this.changeCustId} />
                    </div>
                </div>
                <button type="button" className="go-button" onClick={this.changePath}>Go</button>
                <button type="button" className="go-button-2" onClick={this.cancelTheProcess}>Cancel</button>

                <table>

                    <tbody>

                        {indemenity.map(each => {
                            if (each.id !== "") {
                                <tr key={each.id}>
                                    <td>
                                        <input
                                            type="text"
                                            //required="required"
                                            value={each.name}
                                            onChange={this.changeName}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            //required="required"
                                            value={each.email}
                                            onChange={this.changeEmail}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            //required="required"
                                            value={each.faxNumber}
                                            onChange={this.changeFaxNumber}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            //required="required"
                                            value={each.refNumber}
                                            onChange={this.changeRefNumber}
                                        />
                                    </td>
                                    <td>
                                        <button type="button" className="checkbox-button">
                                            <input type="checkbox" className="checkbox" /></button>
                                    </td>
                                    <td>
                                        <button type="button" className="checkbox-button">
                                            <input type="checkbox" className="checkbox" /></button>
                                    </td>
                                    <td>
                                        <button type="button">Save</button>
                                    </td>

                                    <td>
                                        <button type="button" className="checkbox-button">
                                            <input type="checkbox" className="checkbox" /></button>
                                    </td>
                                </tr>
                            } else {
                                alert("nothing displyed")
                            }
                        }
                        )}
                    </tbody>
                </table>

            </div>
        )

    }
}
export default FaxDetails