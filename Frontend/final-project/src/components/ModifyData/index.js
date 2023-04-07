import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, Redirect } from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [toUpdateList, setToUpdateList] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [faxNumber, setFaxNumber] = useState(0);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const accountNo = Cookies.get("js-accountId");
    const url = "http://localhost:8094/indemn/" + accountNo;
    const options = {
      method: "GET",
    };
    const arr = [];

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((eachData) => ({
          id: eachData.id,
          name: eachData.name,
          emailId: eachData.emailId,
          faxNumber: eachData.faxNumber,
          referenceNumber: eachData.referenceNumber,
          accountNo: eachData.accountNo,
          verify: eachData.verify,
        }));
        console.log(name);
        setData(updatedData); // Update the state with the new array returned by map()
        console.log(updatedData);
      });
  }, []);

  const [isDigitalSignatureChecked, setIsDigitalSignatureChecked] =
    useState(false);
  const [isDeleteChecked, setIsDeleteChecked] = useState(false);
  const [isModifyChecked, setIsModifyChecked] = useState(false);
  const [isVerifyChecked, setIsVerifyChecked] = useState(false);

  const handleCheckboxChange = (event, index, id) => {
    const { name, checked } = event.target;

    const newData = [...data];
    newData[index][name] = checked;

    if (name === "modify") {
      let arr = [];

      data.forEach((eachData) => {
        if (eachData.modify) {
          arr.push(eachData);
        }
      });

      setToUpdateList(arr);
      console.log(name);
      console.log(toUpdateList);
      // console.log(arr);
    }
  };

  const changePath = () => {
    <Link to="/"></Link>;
  };

  const dataToUpdate = async () => {
    // const { toUpdateList } = this.state;
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
    console.log(name);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

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
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  //required="required"
                  defaultValue={row.name}
                  onChange={(e) => setName(e.target.value)}
                  // disabled={!isDisabled || !modify}
                />
              </td>
              <td>
                <input
                  type="email"
                  //required="required"
                  defaultValue={row.emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  // disabled={!isDisabled || !modify}
                />
              </td>
              <td>
                <input
                  type="number"
                  required="required"
                  // value={row.faxNumber}
                  onChange={(e) => setFaxNumber(e.target.value)}
                  defaultValue={row.faxNumber}
                  // disabled={!isDisabled || !row.modify}
                />
              </td>
              <td>
                <input
                  type="text"
                  //required="required"
                  defaultValue={row.referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  // disabled={!isDisabled || !modify}
                />
              </td>
              <td>
                <button type="button" className="checkbox-button">
                  <input
                    type="checkbox"
                    className="checkbox"
                    disabled
                    onChange={(e) => handleCheckboxChange(e, index)}
                  />
                </button>
              </td>
              <td>
                <button type="button" className="checkbox-button">
                  <input
                    type="checkbox"
                    className="checkbox"
                    disabled
                    onChange={(e) => handleCheckboxChange(e, index)}
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
                    onChange={(e) => handleCheckboxChange(e, index, row.id)}
                  />
                </button>
              </td>
              <td>
                <button type="button" className="checkbox-button">
                  <input
                    type="checkbox"
                    className="checkbox"
                    defaultValue={row.verify}
                    onChange={(e) => this.handleCheckboxChange(e, index)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={dataToUpdate}>
        Update
      </button>
      <button onClick={changePath}>Cancel</button>
    </form>
  );
}

export default Table;
