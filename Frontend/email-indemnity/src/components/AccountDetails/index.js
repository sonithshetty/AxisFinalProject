import { Component } from "react"
import { v4 as uuidv4 } from 'uuid'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import InputData from "../InputData"
import RowsData from "../RowsData"
import "./index.css"
import Cookies from "js-cookie"


class AccountDetails extends Component {
    state = {

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
                name: "",
                email: "",
                faxNumber: 0,
                refNumber: "",
            },
            {
                id: 3,
                name: "",
                email: "",
                faxNumber: 0,
                refNumber: "",
            },
            {
                id: 4,
                name: "",
                email: "",
                faxNumber: 0,
                refNumber: "",
            },

        ],

        modifyId: null,
        faxList: [],
        page: 1,
        totalList: []
    }

    submitData = async event => {
        event.preventDefault();
        const accId = Cookies.get("js-accountId")
        const { name, email, faxNumber, refNumber } = this.state
        const modifiedData = {
            name: name,
            emailId: email,
            faxNumber: faxNumber,
            referenceNumber: refNumber,
            accountNo: accId
        }
        const options = {
            method: "POST",
            body: JSON.stringify([modifiedData]),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        const response = await fetch("http://localhost:8094/indemn", options)
        const data = await response.json();
        console.log(data)
    }

    componentDidMount = async () => {
        const accId = Cookies.get("js-accountId")
        const { name, email, faxNumber, refNumber, faxList, indemenity } = this.state
        const url = "http://localhost:8094/indemn/" + accId
        const options = {
            method: "GET"
        }
        const arr = []
        const response = await fetch(url, options)
        console.log(indemenity)
        /*if(response.ok === true){
            const data = await response.json()
            const updatedData = data.map(eachData => {
                name: eachData.name
                email: eachData.emailId
                faxNumber: eachData.faxNumber
                refNumber: eachData.referenceNumber
                accId: eachData.accountNo
            })
            this.setState({ faxList: updatedData})
        }*/
        const data = await response.json()
        this.setState({ faxList: data })
        const dataLength = data.length
        console.log(data)

        for (let i = 0; i < dataLength + 1; i++) {
            const newData = {
                // id: uuidv4(),
                name: name,
                emailId: email,
                faxNumber: faxNumber,
                referenceNumber: refNumber,
                accountNo: accId
            }
            arr.push(newData)
        }
        this.setState({ totalList: [...arr], faxList: arr.slice(0, 7) })
        console.log(faxList)
        /*const options = {
            method: "POST",
            body: JSON.stringify(faxList),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        const response = await fetch("http://localhost:8094/indemn", options)
        const data = await response.json();
        console.log(data)
        console.log(name)
        console.log(email)
        console.log(faxNumber)
        console.log(refNumber)
        console.log(faxList)*/
    }

    changeName = event => {
        this.setState({ name: event.target.value })
    }
    changeEmail = event => {
        this.setState({ email: event.target.value })
    }
    changeFaxNumber = event => {
        this.setState({ faxNumber: event.target.value })
    }
    changeRefNumber = event => {
        this.setState({ refNumber: event.target.value })
    }

    modifyData = id => {
        this.setState({ modifyId: id })
    }

    deleteRowData = id => {
        const { faxList } = this.state
        const newData = faxList.filter(eachData => eachData.id !== id)
        this.setState({ faxList: [...newData] })
    }

    submitTotalData = () => {
        alert('Data Successfully Added')
    }

    backwardButton = () => {
        const { page, totalList } = this.state
        if (page === 1) {
            this.setState({ page: 1 })
        } else {
            const lastIndex = (page - 1) * 7
            const firstIndex = lastIndex - 7
            const pageList = totalList.slice(firstIndex, lastIndex)
            this.setState(prevState => ({
                page: prevState.page - 1,
                faxList: pageList,
            }))
        }
    }

    forwardButton = () => {
        const { page, totalList } = this.state

        const totalPages = Math.ceil(totalList.length / 7)
        if (page === totalPages) {
            this.setState({ page: totalPages })
        } else {
            const lastIndex = (page + 1) * 7
            const firstIndex = lastIndex - 7
            const pageList = totalList.slice(firstIndex, lastIndex)
            this.setState(prevState => ({
                page: prevState.page + 1,
                faxList: pageList,
            }))
        }
    }

    render() {
        const { modifyId, name, email, faxNumber, refNumber, faxList, page, totalList, indemenity } = this.state
        const totalPages = Math.ceil(totalList.length / 7)
        const api = Cookies.get("js-method")
        const accId = Cookies.get("js-accountId")
        const custId = Cookies.get("js-custId")
        return (
            <div className="email-container">
                <h1 className="email-heading">Fax/Email Indemnity</h1>
                <div className="account-details">
                    <div className="api-method-container">
                        <p className="account-function">Function</p>
                        <p>{api}</p>
                    </div>
                    <div className="account-details-container">
                        <p className="cust-id">Cust Id</p>
                        <p>{custId}</p>
                        <p className="cust-id">Account Number</p>
                        <p>{accId}</p>
                    </div>
                </div>
                <div className="pagination-buttons">
                    <button
                        type="button"
                        className="backward-button"
                        onClick={this.backwardButton}
                    >
                        <IoIosArrowBack className="backward" />
                    </button>
                    <p className="page-numbers">{`${page} of ${totalPages}`}</p>
                    <button
                        type="button"
                        className="forward-button"
                        onClick={this.forwardButton}
                    >
                        <IoIosArrowForward className="forward" />
                    </button>
                </div>
                <div>
                    <form onSubmit={this.submitData}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name of Authorised Signatory</th>
                                    <th>Email id</th>
                                    <th>Fax Number</th>
                                    <th>Ref Number</th>
                                    <th>Indemnity recieved for digital signature</th>
                                    <th>Delete/Cancel</th>
                                    <th>Modify</th>
                                    <th>Verify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*
                                    faxList.map(eachData => {
                                        {/*if (eachData.name === "") {
                                            return <InputData />
                                        } else {
                                            return (
                                                <>
                                                    {modifyId === eachData.id ? (
                                                        <tr>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    //required="required"
                                                                    value={name}
                                                                    onChange={this.changeName}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    //required="required"
                                                                    value={email}
                                                                    onChange={this.changeEmail}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    //required="required"
                                                                    value={faxNumber}
                                                                    onChange={this.changeFaxNumber}
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    //required="required"
                                                                    value={refNumber}
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
                                                    ) :
                                                        <RowsData key={eachData.id} rowsData={eachData} modifyData={this.modifyData} deleteRowData={this.deleteRowData} />}
                                                </>
                                                    )

                                                }
                                    }
                                    )
                                */}
                                {indemenity.map(each => {
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
                                                //disabled = {isDisabled}
                                                value={each.refNumber}
                                                onChange={this.changeRefNumber}
                                            />
                                        </td>
                                        <td>
                                            <input type="checkbox" className="checkbox" onChange={this.changeDigitalSignature} />
                                            {/*<button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" /></button>*/}
                                        </td>
                                        <td>
                                            <input type="checkbox" className="checkbox" />
                                            {/*<button type="button" className="checkbox-button">
                            <input type="checkbox" className="checkbox" /></button>*/}
                                        </td>
                                        <td>
                                            <input type="checkbox" className="checkbox" />
                                            {/*<button type="button" className="checkbox-button">
                            <input type="checkbox" className="checkbox" /></button>*/}
                                        </td>
                                        <td>
                                            <input type="checkbox" className="checkbox" />
                                            {/*<button type="button" className="checkbox-button">
                            <input type="checkbox" className="checkbox" /></button>*/}
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <button type="submit" className="submit-button">Submit</button>
                        <button type="button" className="go-button-2" >Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AccountDetails