import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import InputData from "../InputData";
import RowsData from "../RowsData";
import "./index.css";
import Cookies from "js-cookie";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import VerifiedDetails from "../VerifiedDetails";

class AccountDetails extends Component {
  state = {
    id: 0,
    name: "",
    emailId: "",
    faxNumber: 0,
    referenceNumber: "",
    modify: false,
    digitalSignature: false,
    delete: false,
    faxList: [],
    page: 1,
    totalList: [],
    verify: false,
    isDisabled: false,
    toUpdateList: [],
    cancelListIds: [],
    verifiedLists: [],
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
    const accountNo = Cookies.get("js-accountId");
    const { name, emailId, faxNumber, referenceNumber, faxList, indemenity } =
      this.state;
    const url = "http://localhost:8094/indemn/" + accountNo;
    const options = {
      method: "GET",
    };
    const arr = [];
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      const updatedData = data.map((eachData) => ({
        id: eachData.id,
        name: eachData.name,
        emailId: eachData.emailId,
        faxNumber: eachData.faxNumber,
        referenceNumber: eachData.referenceNumber,
        accountNo: eachData.accountNo,
        verify: eachData.verify,
      }));

      this.setState({ faxList: [...updatedData] });
      console.log(updatedData);
      console.log(faxList);
    }
    console.log(faxList);
  };

  dataToUpdate = async () => {
    const { toUpdateList } = this.state;
    const url = "http://localhost:8094/indemn/update";
    const options = {
      method: "PUT",
      body: JSON.stringify(toUpdateList),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  dataToCancel = async () => {
    const { cancelListIds } = this.state;
    const url = "http://localhost:8094/indemn/cancel";
    const options = {
      method: "DELETE",
      body: JSON.stringify(cancelListIds),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  dataToDelete = async () => {
    const { deleteListIds } = this.state;
    const url = "http://localhost:8094/verified/delete";
    const options = {
      method: "DELETE",
      body: JSON.stringify(deleteListIds),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  dataToVerify = async () => {
    const { verifiedLists, cancelListIds, faxList } = this.state;
    const url = "http://localhost:8094/indemn/update";
    const options = {
      method: "PUT",
      body: JSON.stringify(verifiedLists),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    const url2 = "http://localhost:8094/indemn/nonverifed";
    const options2 = {
      method: "GET",
    };
    const response2 = await fetch(url2, options2);
    if (response2.ok === true) {
      const data2 = await response2.json();
      console.log(data2);
      const updatedData = data2.map((eachData) => ({
        id: eachData.id,
        name: eachData.name,
        emailId: eachData.emailId,
        faxNumber: eachData.faxNumber,
        referenceNumber: eachData.referenceNumber,
        accountNo: eachData.accountNo,
        verify: eachData.verify,
      }));

      this.setState({ faxList: [...updatedData] });
      console.log(updatedData);
      console.log(faxList);
    }

    const url1 = "http://localhost:8094/verified";
    const options1 = {
      method: "GET",
    };
    const response1 = await fetch(url1, options1);
    const data1 = await response1.json();
    console.log(data1);

    //const { deleteListIds } = this.state;
    
  };

  changePath = () => {
    //const {api} = this.state
    //Cookies.set("js-method", api, {expires: 7})
    const{history} = this.props
    history.replace("/")
}

  changeName = (event) => {
    this.setState({ name: event.target.value });
    console.log(event.target.value)
  };
  changeemailId = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeFaxNumber = (event) => {
    this.setState({ faxNumber: event.target.value });
  };
  changeRefNumber = (event) => {
    this.setState({ referenceNumber: event.target.value });
  };
  updateData = (event) => {
    this.setState({ modify: event.target.checked });
    if (event.target.checked === true) {
      this.setState({ isDisabled: false });
    }
  };

  handleCheckboxChange = (event, index, id) => {
    const { name, checked } = event.target;
    const { faxList } = this.state;
    const { toUpdateList, cancelListIds, verifiedLists } = this.state;

    const newData = [...faxList];
    newData[index][name] = checked;
    this.setState({ faxList: newData });

    if (name === "modify") {
      // this.setState({ isDisabled: checked });
      const getIndemnitytoUpdate = faxList.filter((eachData) => {
        if (eachData.id === id && checked == true) {
          console.log(eachData);
          this.setState({ toUpdateList: [...toUpdateList, eachData] });
        }
      });
      console.log(getIndemnitytoUpdate);
      console.log(toUpdateList);
    }
    if (name === "cancel") {
      const updatedCancelListIds = faxList
        .filter((eachData) => eachData.id === id && checked === true)
        .map((eachData) => eachData.id);

      this.setState({
        cancelListIds: [...cancelListIds, ...updatedCancelListIds],
      });
    }
    console.log(cancelListIds);

    if (name === "verify") {
      const verifiedDetails = faxList.filter((eachData) => {
        if (eachData.id === id && checked === true) {
          console.log(eachData);
          this.setState({ verifiedLists: [...verifiedLists, eachData] , cancelListIds: [...cancelListIds, eachData.id]});
        }
      });
    }
    console.log(verifiedLists);
    console.log(cancelListIds);
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
      modify
    } = this.state;
    const totalPages = Math.ceil(totalList.length / 7);
    const api = Cookies.get("js-method");
    const accId = Cookies.get("js-accountId");
    const custId = Cookies.get("js-custId");

    if (api === "Add") {
      return <InputData />
    } else if (api === "Modify") {
      return (
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
              {faxList.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      //required="required"
                      defaultValue={row.name}
                      onChange={this.changeName}
                    // disabled={!isDisabled || !modify}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      //required="required"
                      defaultValue={row.emailId}
                      onChange={this.changeEmail}
                    // disabled={!isDisabled || !modify}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      required="required"
                      // value={row.faxNumber}
                      onChange={this.changeFaxNumber}
                      defaultValue={row.faxNumber}
                    // disabled={!isDisabled || !row.modify}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      //required="required"
                      defaultValue={row.referenceNumber}
                      onChange={this.changeRefNumber}
                    // disabled={!isDisabled || !modify}
                    />
                  </td>
                  <td>
                    <button type="button" className="checkbox-button">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => this.handleCheckboxChange(e, index)}
                      />
                    </button>
                  </td>
                  <td>
                    <button type="button" className="checkbox-button">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => this.handleCheckboxChange(e, index)}
                      />
                    </button>
                  </td>
                  <td>
                    <button type="button" className="checkbox-button">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="modify"
                        value={row.modify}
                        onChange={(e) =>
                          this.handleCheckboxChange(e, index, row.id)
                        }
                      />
                    </button>
                  </td>

                  <td>
                    <button type="button" className="checkbox-button">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => this.handleCheckboxChange(e, index)}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={this.dataToUpdate}>Update</button>
          <button onClick={this.changePath}>Cancel</button>
        </form>
      )
    } else if(api === "Verify"){
      return (
        <form>
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
                {faxList.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.name}
                        onChange={this.changeName}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.emailId}
                        onChange={this.changeEmail}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        // value={row.faxNumber}
                        onChange={this.changeFaxNumber}
                        defaultValue={row.faxNumber}
                        // disabled={!isDisabled || !row.modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        //required="required"
                        defaultValue={row.referenceNumber}
                        onChange={this.changeRefNumber}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>

                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="verify"
                          value={row.verify}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={this.dataToVerify}>Verify</button>
          <button onClick={this.changePath}>Cancel</button>
          </form>
      )
    }else if(api === "Cancel"){
      return (
        <form>
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
                {faxList.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        //required="required"
                        defaultValue={row.name}
                        onChange={this.changeName}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        //required="required"
                        defaultValue={row.emailId}
                        onChange={this.changeEmail}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        //required="required"
                        //value={row.faxNumber}
                        onChange={this.changeFaxNumber}
                        defaultValue={row.faxNumber}
                        // disabled={!isDisabled || !row.modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        //required="required"
                        defaultValue={row.referenceNumber}
                        onChange={this.changeRefNumber}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="cancel"
                          value={row.cancel}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>

                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          value={row.verify}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={this.dataToCancel}>Delete</button>
          <button onClick={this.changePath}>Cancel</button>
          </form>
      )
    }
  };

  render() {
    const {
      modifyId,
      name,
      emailId,
      faxNumber,
      referenceNumber,
      faxList,
      page,
      totalList,
      indemenity,
      isDisabled,
      modify,
    } = this.state;
    const totalPages = Math.ceil(totalList.length / 7);
    const api = Cookies.get("js-method");
    const accountNo = Cookies.get("js-accountId");
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
            <p>{accountNo}</p>
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
          {/* MODIFY DATA OF 2nd Table */}
          {/* <form onSubmit={this.submitData}>
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
                {faxList.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.name}
                        onChange={this.changeName}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.emailId}
                        onChange={this.changeEmail}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        // value={row.faxNumber}
                        onChange={this.changeFaxNumber}
                        defaultValue={row.faxNumber}
                        // disabled={!isDisabled || !row.modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.referenceNumber}
                        onChange={this.changeRefNumber}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="modify"
                          value={row.modify}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>

                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
          <button onClick={this.dataToUpdate}>Update</button>
          <button>Cancel</button> */}

          {/* ADD DATA IN 2nd Table */}
          {/* <InputData /> */}

          {/* CANCEL DATA FROM 2nd Table */}
          {/* <form onSubmit={this.submitData}>
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
                {faxList.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.name}
                        onChange={this.changeName}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.emailId}
                        onChange={this.changeEmail}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        // value={row.faxNumber}
                        onChange={this.changeFaxNumber}
                        defaultValue={row.faxNumber}
                        // disabled={!isDisabled || !row.modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.referenceNumber}
                        onChange={this.changeRefNumber}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="cancel"
                          value={row.cancel}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>

                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          value={row.verify}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form> */}

          {/* VERIFY DATA FROM 2nd TABLE and store in 3rd TABLE */}
          {/* <form onSubmit={this.submitData}>
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
                {faxList.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.name}
                        onChange={this.changeName}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.emailId}
                        onChange={this.changeEmail}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        // value={row.faxNumber}
                        onChange={this.changeFaxNumber}
                        defaultValue={row.faxNumber}
                        // disabled={!isDisabled || !row.modify}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        required="required"
                        defaultValue={row.referenceNumber}
                        onChange={this.changeRefNumber}
                        // disabled={!isDisabled || !modify}
                      />
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => this.handleCheckboxChange(e, index)}
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>

                    <td>
                      <button type="button" className="checkbox-button">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="verify"
                          value={row.verify}
                          onChange={(e) =>
                            this.handleCheckboxChange(e, index, row.id)
                          }
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>*/}

          {/* DELETE DATA FROM 3rd Table */}
          {/* <button onClick={this.dataToDelete}>Delete</button>
          <button>Back</button> */}
          {this.renderData()}
        </div>
      </div>
    );
  }
}

export default AccountDetails;
