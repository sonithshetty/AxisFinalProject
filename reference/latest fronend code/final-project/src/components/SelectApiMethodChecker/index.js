import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import { Redirect } from "react-router-dom";
import LogoutComponent from "../LogoutComponent";

class SelectApiMethodChecker extends Component {
  state = {
    api: "--Select--",
  };

  changePath = () => {
    const { api } = this.state;
    Cookies.set("js-method", api, { expires: 7 });
    const { history } = this.props;
    
    if(api === "--Select--"){
      alert("Plese Select Function")
    }else{
      history.replace("/fax-method");
    }
  };

  changeApiMethod = (event) => {
    this.setState({ api: event.target.value });
  };
  cancelTheProcess = () => {
    this.setState({ api: "--Select--" });
  };

  render() {
    const { api } = this.state;
    const jwtToken = Cookies.get('jwt_token1')
    if (jwtToken === undefined) {
      return <Redirect to="/manegerlogin" />
    }
    return (
      <div className="email-container">
        <h1 className="email-heading">Fax/Email Indemnity</h1>
        <div className="api-method">
          <p className="email-function">
            Function<span className="email-function-star">*</span>
          </p>
          <select
            value={api}
            onChange={this.changeApiMethod}
            className="email-select"
          >
            <option>--Select--</option>
            {/* <option value="Add">Add</option>
            <option value="Modify">Modify</option> */}
            <option value="Verify">Verify</option>
            {/* <option value="Cancel">Cancel</option> */}
            <option value="Inquire">Inquire</option>
          </select>
        </div>
        <button type="button" className="go-button" onClick={this.changePath}>
          Go
        </button>
        <button
          type="button"
          className="go-button-2"
          onClick={this.cancelTheProcess}
        >
          Cancel
        </button>
        <LogoutComponent/>
      </div>
    );
  }
}

export default SelectApiMethodChecker;
