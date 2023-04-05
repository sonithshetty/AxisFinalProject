import React, { useState } from "react";
import Cookies from "js-cookie";

function Table() {
  const [data, setData] = useState([
    {
      name: "",
      email: "",
      faxNumber: 0,
      refNumber: "",
      modify: false,
      verify: false,
      digitalSignature: false,
      delete: false,
    },
    {
      name: "",
      email: "",
      faxNumber: 0,
      refNumber: "",
      modify: false,
      verify: false,
      digitalSignature: false,
      delete: false,
    },
    {
      name: "",
      email: "",
      faxNumber: 0,
      refNumber: "",
      modify: false,
      verify: false,
      digitalSignature: false,
      delete: false,
    },
    {
      name: "",
      email: "",
      faxNumber: 0,
      refNumber: "",
      modify: false,
      verify: false,
      digitalSignature: false,
      delete: false,
    },
    {
      name: "",
      email: "",
      faxNumber: 0,
      refNumber: "",
      modify: false,
      verify: false,
      digitalSignature: false,
      delete: false,
    },
  ]);
  const [isDigitalSignatureChecked, setIsDigitalSignatureChecked] =
    useState(false);
  const [isDeleteChecked, setIsDeleteChecked] = useState(false);
  const [isModifyChecked, setIsModifyChecked] = useState(false);
  const [isVerifyChecked, setIsVerifyChecked] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

  const handleCheckboxChange = (event, index) => {
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
      setIsModifyChecked(checked);
      setIsVerifyChecked(checked);
    } else if (name === "modify") {
      //newData[index].delete = false;
      //newData[index].verify = false;
      setIsDeleteChecked(checked);
      setIsVerifyChecked(checked);
    } else if (name === "verify") {
      //newData[index].delete = false;
      //newData[index].modify = false;
      setIsModifyChecked(checked);
      setIsDeleteChecked(checked);
    } else {
    }
  };

  const submitData = async (event) => {
    event.preventDefault();
    const accId = Cookies.get("js-accountId");
    //const { name, email, faxNumber, refNumber } = this.state
    const modifiedData = data
      .filter(
        (row) =>
          row.name !== "" ||
          row.email !== "" ||
          row.faxNumber !== 0 ||
          row.refNumber !== ""
      )
      .map((row) => ({
        name: row.name,
        emailId: row.email,
        faxNumber: row.faxNumber,
        referenceNumber: row.refNumber,
        accountNo: accId,
      }));
    const options = {
      method: "POST",
      body: JSON.stringify(modifiedData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch("http://localhost:8094/indemn", options);
    const dataDetails = await response.json();
    console.log(dataDetails);
  };

  return (
    <form onSubmit={submitData}>
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
                  value={row.name}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={row.email}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="faxNumber"
                  value={row.faxNumber}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="refNumber"
                  disabled={!isDigitalSignatureChecked || !row.digitalSignature}
                  value={row.refNumber}
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
                  name="delete"
                  disabled={!isDeleteChecked}
                  checked={row.delete}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="modify"
                  disabled={!isModifyChecked}
                  checked={row.modify}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="verify"
                  disabled={!isVerifyChecked}
                  checked={row.verify}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="submit-button">
        Submit
      </button>
      <button type="button" className="go-button-2">
        Cancel
      </button>
    </form>
  );
}

export default Table;
