import React, { useState } from "react";
import Cookies from "js-cookie";

class VerifiedDetails extends Component {

  

  componentDidMount = async () => {
    const accountNo = Cookies.get("js-accountId");
    const { name, emailId, faxNumber, referenceNumber, faxList, indemenity } =
      this.state;
    const url = "http://localhost:8094/verified/" + accountNo;
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

  const handleCheckboxChange = (event, index, id) => {
    const { faxList, cancelListIds } = this.state;
    const { name, checked } = event.target;
    const newData = [...data];
    newData[index][name] = checked;
    setData(newData);
    if (name === "digitalSignature") {
      setIsDigitalSignatureChecked(checked);
    }
    if (name === "delete") {
      //newData[index].modify = false;
      //newData[index].verify = false;
      // setIsModifyChecked(checked);
      // setIsVerifyChecked(checked);
      const updatedCancelListIds = faxList
        .filter((eachData) => eachData.id === id && checked === true)
        .map((eachData) => eachData.id);

      this.setState({
        cancelListIds: [...cancelListIds, ...updatedCancelListIds],
      });
    }
    console.log(cancelListIds);
  };

  const dataToDelete = async () => {
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

  return (
    <form onSubmit={dataToDelete}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Fax Number</th>
            <th>Reference Number</th>
            <th>Digital Signature</th>
            <th>Delete/cancel</th>
            <th>Modify</th>
            <th>Verify</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  defaultValue={row.name}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="emailId"
                  defaultValue={row.emailId}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="faxNumber"
                  defaultValue={row.faxNumber}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="referenceNumber"
                  // disabled={!isDigitalSignatureChecked || !row.digitalSignature}
                  defaultValue={row.referenceNumber}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="digitalSignature"
                  checked={row.digitalSignature}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="delete"
                  value={row.delete}
                  onChange={(event) =>
                    handleCheckboxChange(event, index, row.id)
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="modify"
                  // disabled={!isModifyChecked}
                  disabled
                  checked={row.modify}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="verify"
                  // disabled={!isVerifyChecked}
                  disabled
                  checked={row.verify}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="submit-button">
        Delete
      </button>
      <button type="button" className="go-button-2">
        Cancel
      </button>
    </form>
  );
}

export default VerifiedDetails;
