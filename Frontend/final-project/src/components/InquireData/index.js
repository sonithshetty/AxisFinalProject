import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, Redirect } from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  // const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [faxNumber, setFaxNumber] = useState(0);
  const [referenceNumber, setReferenceNumber] = useState("");
  // const [verify, setVerify] = useState(false);
  useEffect(() => {
    const accountNo = Cookies.get("js-accountId");
    const url = "http://localhost:8094/verified/" + accountNo;
    const options = {
      method: "GET",
    };
    const arr = [];
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((eachData) => ({
          // id: eachData.id,
          name: eachData.name,
          emailId: eachData.emailId,
          faxNumber: eachData.faxNumber,
          referenceNumber: eachData.referenceNumber,
          accountNo: eachData.accountNo,
          // digitalSignature: eachData.digitalSignature,
          // delete: eachData.delete,
          // modify: eachData.modify,
          // verify: eachData.verify,
        }));
        setData(updatedData);
      });
  }, []);
  const [isDigitalSignatureChecked, setIsDigitalSignatureChecked] =
    useState(false);
  const [isDeleteChecked, setIsDeleteChecked] = useState(false);
  const [isModifyChecked, setIsModifyChecked] = useState(false);
  const [isVerifyChecked, setIsVerifyChecked] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = data.map((eachData) => {
      if (eachData.id === index) {
        return {
          ...eachData,
          [name]: value,
        };
      } else {
        return eachData;
      }
    });
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

  const changePath = () => {
    <Link to="/"></Link>;
  };

  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const accId = Cookies.get("js-accountId");
  //   //const { name, email, faxNumber, refNumber } = this.state
  //   const modifiedData = data
  //     .filter(
  //       (row) =>
  //         row.name !== "" ||
  //         row.email !== "" ||
  //         row.faxNumber !== 0 ||
  //         row.refNumber !== ""
  //     )
  //     .map((row) => ({
  //       name: row.name,
  //       emailId: row.email,
  //       faxNumber: row.faxNumber,
  //       referenceNumber: row.refNumber,
  //       accountNo: accId,
  //     }));
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(modifiedData),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   };
  //   const response = await fetch("http://localhost:8094/indemn", options);
  //   const dataDetails = await response.json();
  //   alert("Data Added Sucssesfully");
  //   console.log(dataDetails);
  // };

  return (
    <form>
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
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={eachData.name}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="emailId"
                  value={eachData.emailId}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="faxNumber"
                  value={eachData.faxNumber}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="referenceNumber"
                  value={eachData.referenceNumber}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="digitalSignature"
                  disabled
                  checked={eachData.digitalSignature}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="delete"
                  disabled={!isDeleteChecked}
                  checked={eachData.delete}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="modify"
                  disabled={!isModifyChecked}
                  checked={eachData.modify}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="verify"
                  disabled={!isVerifyChecked}
                  checked={eachData.verify}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button type="submit" className="submit-button">
        Submit
      </button> */}
      <button type="button" className="go-button-2" onClick={changePath}>
        <Link to="/">Back</Link>
      </button>
    </form>
  );
}

export default Table;
