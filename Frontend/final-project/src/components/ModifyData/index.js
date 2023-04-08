import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link} from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  const [toUpdateList, setToUpdateList] = useState([]);

  useEffect(() => {
    const accountNo = Cookies.get("js-accountId");
    const url = "http://localhost:8094/indemn/" + accountNo;
    const options = {
      method: "GET",
    }

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
        setData(updatedData); // Update the state with the new array returned by map()
        console.log(updatedData);
      });
  }, []);

  const handleCheckboxChange = (event, index, id) => {
    const { name, checked } = event.target;

    const newData = [...data];
    newData[index][name] = checked;

    if (name === "modify") {
      const selectedRows = data.filter((eachData) => eachData.modify);

      setToUpdateList(selectedRows);
    }
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
    if (response.ok) {
      alert("Data Updated Succesfully");
    } else {
      alert("Data Not Updated")
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...data];

    if (name === "name") {
      newData[index]["name"] = value;
    }
    if (name === "emailId") {
      newData[index]["emailId"] = value;
    }
    if (name === "faxNumber") {
      newData[index]["faxNumber"] = value;
    }
    if (name === "referenceNumber") {
      newData[index]["referenceNumber"] = value;
    }
    setData(newData);
    console.log(newData)
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
                  name="name"
                  defaultValue={row.name}
                  onChange={(e) => handleInputChange(e, index)}
                // disabled={!isDisabled || !modify}
                />
              </td>
              <td>
                <input
                  type="email"
                  //required="required"
                  name="emailId"
                  defaultValue={row.emailId}
                  onChange={(e) => handleInputChange(e, index)}
                // disabled={!isDisabled || !modify}
                />
              </td>
              <td>
                <input
                  type="number"
                  required="required"
                  name="faxNumber"
                  // value={row.faxNumber}
                  onChange={(e) => handleInputChange(e, index)}
                  defaultValue={row.faxNumber}
                // disabled={!isDisabled || !row.modify}
                />
              </td>
              <td>
                <input
                  type="text"
                  //required="required"
                  name="referenceNumber"
                  defaultValue={row.referenceNumber}
                  onChange={(e) => handleInputChange(e, index)}
                // disabled={!isDisabled || !modify}
                />
              </td>
              <td>

                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) => handleCheckboxChange(e, index)}
                />

              </td>
              <td>

                <input
                  type="checkbox"
                  className="checkbox"
                  disabled
                  onChange={(e) => handleCheckboxChange(e, index)}
                />

              </td>
              <td>

                <input
                  type="checkbox"
                  className="checkbox"
                  name="modify"
                  value={row.modify}
                  onChange={(e) => handleCheckboxChange(e, index, row.id)}
                />

              </td>
              <td>

                <input
                  type="checkbox"
                  className="checkbox"
                  defaultValue={row.verify}
                  disabled
                  onChange={(e) => this.handleCheckboxChange(e, index)}
                />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={dataToUpdate}>
        Update
      </button>
      <button type="button"><Link to="/">Back</Link></button>
    </form>
  );
}

export default Table;