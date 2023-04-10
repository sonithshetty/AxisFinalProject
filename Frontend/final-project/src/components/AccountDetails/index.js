import { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import InputData from "../InputData";
import ModifyData from "../ModifyData";
import InquireData from "../InquireData";
import "./index.css";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

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
  componentDidMount = async () => {
    const accountNo = Cookies.get("js-accountId");
    const { faxList } = this.state;
    const url = "http://localhost:8094/indemn/" + accountNo;
    const options = {
      method: "GET",
    };

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
    const { verifiedLists, cancelListIds } = this.state;
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

    const url1 = "http://localhost:8094/verified";
    const options1 = {
      method: "GET",
    };
    const response1 = await fetch(url1, options1);
    const data1 = await response1.json();
    console.log(data1);

    const url2 = "http://localhost:8094/indemn/cancel";
    const options2 = {
      method: "DELETE",
      body: JSON.stringify(cancelListIds),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response2 = await fetch(url2, options2);
    const data2 = await response2.json();
    console.log(data2);
  };

  changeVerifyPath = () => {
    const { history } = this.props;
    history.replace("/checker");
  };

  changeCancelPath = () => {
    const { history } = this.props;
    history.replace("/");
  };

  changeName = (event) => {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
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
      const rowToSelect = faxList.find(
        (eachData) => eachData.id === id && checked
      );
      if (rowToSelect) {
        this.setState({
          toUpdateList: [...this.state.toUpdateList, rowToSelect],
        });
      }
      console.log(toUpdateList);
    }
    if (name === "cancel") {
      const updatedCancelListIds = faxList
        .filter((eachData) => eachData.id === id && checked)
        .map((eachData) => eachData.id);

      this.setState({
        cancelListIds: [...cancelListIds, ...updatedCancelListIds],
      });
    }
    console.log(cancelListIds);

    if (name === "verify") {
      const verifiedData = faxList.find((eachData) => eachData.id === id);
      if (checked) {
        this.setState({ verifiedLists: [...verifiedLists, verifiedData] });
      } else {
        const updatedVerifiedLists = verifiedLists.filter(
          (eachData) => eachData.id !== id
        );
        this.setState({ verifiedLists: updatedVerifiedLists });
      }

      const updatedCancelListIds = faxList
        .filter((eachData) => eachData.id === id && checked)
        .map((eachData) => eachData.id);

      if (checked) {
        this.setState({
          cancelListIds: [...cancelListIds, ...updatedCancelListIds],
        });
      } else {
        const updateCancelListIds = cancelListIds.filter((each) => each !== id);
        this.setState({ cancelListIds: updateCancelListIds });
      }
    }
    console.log(verifiedLists);
    console.log(cancelListIds);
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
    const { faxList } = this.state;
    const api = Cookies.get("js-method");
    if (api === "Add") {
      return <InputData />;
    } else if (api === "Modify") {
      return <ModifyData />;
    } else if (api === "Verify") {
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
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      required="required"
                      defaultValue={row.emailId}
                      onChange={this.changeEmail}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      required="required"
                      onChange={this.changeFaxNumber}
                      defaultValue={row.faxNumber}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={row.referenceNumber}
                      onChange={this.changeRefNumber}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={(e) => this.handleCheckboxChange(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      disabled
                      onChange={(e) =>
                        this.handleCheckboxChange(e, index, row.id)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      disabled
                      onChange={(e) =>
                        this.handleCheckboxChange(e, index, row.id)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="verify"
                      defaultValue={row.verify}
                      onChange={(e) =>
                        this.handleCheckboxChange(e, index, row.id)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={this.dataToVerify}>Verify</button>
          <button onClick={this.changeVerifyPath}>Cancel</button>
        </form>
      );
    } else if (api === "Cancel") {
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
                      defaultValue={row.name}
                      onChange={this.changeName}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={row.emailId}
                      onChange={this.changeEmail}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={this.changeFaxNumber}
                      defaultValue={row.faxNumber}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={row.referenceNumber}
                      onChange={this.changeRefNumber}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={(e) => this.handleCheckboxChange(e, index)}
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="cancel"
                      value={row.cancel}
                      onChange={(e) =>
                        this.handleCheckboxChange(e, index, row.id)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      disabled
                      onChange={(e) =>
                        this.handleCheckboxChange(e, index, row.id)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      disabled
                      value={row.verify}
                      onChange={(e) =>
                        this.handleCheckboxChange(e, index, row.id)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={this.dataToCancel}>Delete</button>
          <button onClick={this.changeCancelPath}>Cancel</button>
        </form>
      );
    } else if (api === "Inquire") {
      return <InquireData />;
    }
  };

  render() {
    const { faxList, page, totalList } = this.state;
    const totalPages = Math.ceil(totalList.length / 7);
    const api = Cookies.get("js-method");
    const accountNo = Cookies.get("js-accountId");
    const custId = Cookies.get("js-custId");
    // const jwtToken = Cookies.get("jwt_token")
    // if(jwtToken === undefined){
    //   return <Redirect to="/employeelogin"/>
    // }
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
        {/* <div className="pagination-buttons">
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
        </div> */}
        <div>{this.renderData()}</div>
      </div>
    );
  }
}

export default AccountDetails;
