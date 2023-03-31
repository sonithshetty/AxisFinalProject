import { Component } from "react"
import ApiMethod from "../../context/ApiMethod"
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import RowsData from "../RowsData"
import "./index.css"

const accountData = [
    {
      id: 1,
      name: "Jenny Chan",
      email: "jenny.chan@email.com",
      faxNumber: "123456789",
      refNumber: "987654321"
    },
    {
      id: 2,
      name: "Jessica warren",
      email: "jessica.warren@email.com",
      faxNumber: "123456789",
      refNumber: "987654321"
    },
    {
      id: 3,
      name:  "Tony Frank",
      email: "tony.frank@email.com",
      faxNumber: "123456789",
      refNumber: "987654321"
    },
    {
      id: 4,
      name:  "Jeremy Clark",
      email: "jeremy.clark@email.com",
      faxNumber: "123456789",
      refNumber: "987654321"
    },
    {
      id: 5,
      name:"Raymond Edwards",
      email: "raymon.edwards@email.com",
      faxNumber: "123456789",
      refNumber: "987654321"
    }
  ]
 
class AccountDetails extends Component {
    state = {
        name:"",
        email:'',
        faxNumber:'',
        refNumber:"",
        modifyId: null,
        faxList: accountData
    }

    submitData = async event =>{
        event.preventDefault();

        const{name, email, faxNumber, refNumber} = this.state
        const modifiedData = {
            name, email, faxNumber, refNumber
        }
        const option = {
            method: "PUT",
            body: JSON.stringify(modifiedData)
        }
        const response = await fetch("url", option)
    }

    changeName = event => {
        this.setState({name: event.target.value})
    }
    changeEmail = event => {
        this.setState({email: event.target.value})
    }
   changeFaxNumber = event => {
        this.setState({faxNumber: event.target.value})
    }
    changeRefNumber = event => {
        this.setState({refNumber: event.target.value})
    }

    modifyData = id => {
        this.setState({modifyId: id})
    }

    deleteRowData = id => {
        const{faxList} = this.state
        const newData = faxList.filter(eachData => eachData.id !== id)
        this.setState({faxList: [...newData]})
    }

    render(){
        const{modifyId, name, email, faxNumber, refNumber, faxList} = this.state
        return(
            <ApiMethod.Consumer>
            {value => {
                const{api, accountId, customerId} = value
                return(
                    <div className="email-container">
                    <h1 className="email-heading">Fax/Email Indemnity</h1>
                    <div className="account-details">
                        <div className="api-method-container">
                        <p className="account-function">Function</p>
                        <p>{api}</p>
                        </div>
                        <div className="account-details-container">
                        <p className="cust-id">Cust Id</p>
                        <p>{customerId}</p>
                        <p className="cust-id">Account Number</p>
                        <p>{accountId}</p>
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
                    <p className="page-numbers">number</p>
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
                                {
                                    faxList.map(eachData => 
                                        <>
                                        {modifyId === eachData.id ? (
                                            <tr>
                                            <td>
                                              <input
                                                type="text"
                                                required="required"
                                                value={name}
                                                onChange={this.changeName}
                                               />
                                            </td>
                                            <td>
                                            <input
                                                type="text"
                                                required="required"
                                                value={email}
                                                onChange={this.changeEmail}
                                               />
                                            </td>
                                            <td>
                                            <input
                                                type="text"
                                                required="required"
                                                value={faxNumber}
                                                onChange={this.changeFaxNumber}
                                               />
                                            </td>
                                            <td>
                                            <input
                                                type="text"
                                                required="required"
                                                value={refNumber}
                                                onChange={this.changeRefNumber}
                                               />
                                            </td>
                                            <td>
                                            <button type="button" className="checkbox-button">
                                            <input type="checkbox" className="checkbox"/></button>
                                            </td>
                                            <td>
                                            <button type="button" className="checkbox-button">
                                            <input type="checkbox" className="checkbox"/></button>
                                            </td>
                                            <td>
                                            <button type="button">Save</button>
                                            </td>
                                            
                                            <td>
                                            <button type="button" className="checkbox-button">
                                            <input type="checkbox" className="checkbox"/></button>
                                            </td>
                                          </tr>
                                        ) : 
                                        <RowsData key={eachData.id} rowsData={eachData} modifyData = {this.modifyData} deleteRowData ={this.deleteRowData}/>}
                                        </>
                                        )
                                }
                            </tbody>
                        </table>
                        </form>
                    </div>
                    <button type="button" className="submit-button">Submit</button>
                    <button type="button" className="go-button-2" >Cancel</button>
                </div>
                )
            }}
            </ApiMethod.Consumer>
        )   
    }
}

export default AccountDetails