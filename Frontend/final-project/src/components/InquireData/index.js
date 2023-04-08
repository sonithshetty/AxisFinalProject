import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link} from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const accountNo = Cookies.get("js-accountId");
    const url = "http://localhost:8094/verified/" + accountNo;
    const options = {
      method: "GET",
    };
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
        setData(updatedData);
      });
  }, []);

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
  };

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
                  disabled
                  value={eachData.name}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="emailId"
                  disabled
                  value={eachData.emailId}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="faxNumber"
                  disabled
                  value={eachData.faxNumber}
                  onChange={(event) => handleInputChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="referenceNumber"
                  disabled
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
                  disabled
                  checked={eachData.delete}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="modify"
                  disabled
                  checked={eachData.modify}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="verify"
                  disabled
                  checked={eachData.verify}
                  onChange={(event) => handleCheckboxChange(event, eachData.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="go-button-2">
        <Link to="/">Back</Link>
      </button>
    </form>
  );
}

export default Table;