import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import InputData from "../InputData";
import RowsData from "../RowsData";
import "./index.css";
import Cookies from "js-cookie";
import { isDisabled } from "@testing-library/user-event/dist/utils";

class AccountDetails extends Component {
  state = {
    name: "",
    email: "",
    faxNumber: 0,
    referenceNumber: "",
    modify: false,
    faxList: [],
    page: 1,
    totalList: [],
    verify: false,
    isDisabled: true,
  };

  /*submitData = async event => {
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
    }*/

  componentDidMount = async () => {
    const accId = Cookies.get("js-accountId");
    const { name, email, faxNumber, refNumber, faxList, indemenity } =
      this.state;
    const url = "http://localhost:8094/indemn/" + accId;
    const options = {
      method: "GET",
    };
    const arr = [];
    const response = await fetch(url, options);
    //const data = await response.json()
    //this.setState({ faxList: data })
    //const dataLength = data.length
    //console.log(data);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      const updatedData = data.map((eachData) => ({
        name: eachData.name,
        email: eachData.emailId,
        faxNumber: eachData.faxNumber,
        refNumber: eachData.referenceNumber,
        accId: eachData.accountNo,
        verify: eachData.verify,
      }));

      this.setState({ faxList: [...updatedData] });
      console.log(updatedData);
      console.log(faxList);
    }
    console.log(faxList);
    for (let i = 0; i < 1; i++) {
      const newData = {
        // id: uuidv4(),
        name: name,
        emailId: email,
        faxNumber: faxNumber,
        referenceNumber: refNumber,
        accountNo: accId,
      };
      arr.push(newData);
    }
    // this.setState({ totalList: [...arr], faxList: arr.slice(0, 7) });
  };

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changeFaxNumber = (event) => {
    this.setState({ faxNumber: event.target.value });
  };
  changeRefNumber = (event) => {
    this.setState({ refNumber: event.target.value });
  };
  updateData = (event) => {
    this.setState({ modify: event.target.checked });
    if (event.target.checked === true) {
      this.setState({ isDisabled: false });
    }
  };

  modifyData = (id) => {
    this.setState({ modifyId: id });
  };

  deleteRowData = (id) => {
    const { faxList } = this.state;
    const newData = faxList.filter((eachData) => eachData.id !== id);
    this.setState({ faxList: [...newData] });
  };

  submitTotalData = () => {
    alert("Data Successfully Added");
  };

  backwardButton = () => {
    const { page, totalList } = this.state;
    if (page === 1) {
      this.setState({ page: 1 });
    } else {
      const lastIndex = (page - 1) * 7;
      const firstIndex = lastIndex - 7;
      const pageList = totalList.slice(firstIndex, lastIndex);
      this.setState((prevState) => ({
        page: prevState.page - 1,
        indemenity: pageList,
      }));
    }
  };

  forwardButton = () => {
    const { page, totalList } = this.state;

    const totalPages = Math.ceil(totalList.length / 7);
    if (page === totalPages) {
      this.setState({ page: totalPages });
    } else {
      const lastIndex = (page + 1) * 7;
      const firstIndex = lastIndex - 7;
      const pageList = totalList.slice(firstIndex, lastIndex);
      this.setState((prevState) => ({
        page: prevState.page + 1,
        indemenity: pageList,
      }));
    }
  };

  renderData = () => {
    const { indemenity } = this.state;

    if (indemenity.length !== 0) {
    }
  };

  render() {
    const {
      modifyId,
      name,
      email,
      faxNumber,
      refNumber,
      faxList,
      page,
      totalList,
      indemenity,
      isDisabled,
    } = this.state;
    const totalPages = Math.ceil(totalList.length / 7);
    const api = Cookies.get("js-method");
    const accId = Cookies.get("js-accountId");
    const custId = Cookies.get("js-custId");
    console.log(faxList);
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
                {faxList.map((eachData) => (
                  <tr key={eachData.id}>
                    <td>
                      <input
                        type="text"
                        required="required"
                        value={eachData.name}
                        onChange={this.changeName}
                        disabled={isDisabled}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        value={eachData.email}
                        onChange={this.changeEmail}
                        disabled={isDisabled}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        value={eachData.faxNumber}
                        onChange={this.changeFaxNumber}
                        disabled={isDisabled}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        value={eachData.refNumber}
                        onChange={this.changeRefNumber}
                        disabled={isDisabled}
                      />
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={this.updateData}
                        />
                      </button>
                    </td>

                    <td>
                      <button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default AccountDetails;
