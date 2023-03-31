import { Component } from "react"
import {v4 as uuidv4} from 'uuid'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import InputData from "../InputData"
import RowsData from "../RowsData"
import "./index.css"
import Cookies from "js-cookie"

 
class AccountDetails extends Component {
    state = {
        name:"",
        email:'',
        faxNumber:'',
        refNumber:"",
        modifyId: null,
        faxList: [],
        page: 1,
        totalList:[]
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

    componentDidMount =async () => {
        const url = ""
        const arr = []
        const response = await fetch(url)
        const data = response.json()
        const dataLength = 0  //data.length   
        for(let i=dataLength; i<21 ; i++){
            const newData = {
                id: uuidv4(),
                name:"",
                email:'',
                faxNumber:"",
                refNumber:'',
            }
            arr.push(newData)
        }
        this.setState({totalList: [...arr], faxList: arr.slice(0,7)})
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

    submitTotalData = () => {
        alert('Data Successfully Added')
    }

    backwardButton = () => {
        const {page, totalList} = this.state
        if (page === 1) {
          this.setState({page: 1})
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
        const {page, totalList} = this.state
    
        const totalPages = Math.ceil(totalList.length / 7)
        if (page === totalPages) {
          this.setState({page: totalPages})
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

    render(){
        const{modifyId, name, email, faxNumber, refNumber, faxList, page, totalList} = this.state
        const totalPages = Math.ceil(totalList.length / 7)
        const api = Cookies.get("js-method")
        const accId  = Cookies.get("js-accountId")
        const custId = Cookies.get("js-custId")
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
                        {
                            faxList.map(eachData => {
                                if(eachData.name === ""){
                                    return <InputData />
                                }else{
                                    return(
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
                            }
                                )
                        }
                    </tbody>
                </table>
                </form>
            </div>
            <button type="button" className="submit-button" onClick={this.submitTotalData}>Submit</button>
            <button type="button" className="go-button-2" >Cancel</button>
        </div>
        )
    }
}

export default AccountDetails