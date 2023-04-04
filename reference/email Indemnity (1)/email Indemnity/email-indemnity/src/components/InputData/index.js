import { Component} from "react";

class InputData extends Component{
    state = {
        name:"",
        email:"",
        faxNumber:'',
        refNumber:"",
    }

    changeName = event => {
        this.setState({name: event.target.value})
    }
    changeEmail = event => {
        this.setState({email: event.target.value})
    }
   changeFaxNumber = event => {
        this.setState({faxNumber: event.target.value})
    }
    changeRefNumber = event => {
        this.setState({refNumber: event.target.value})
    }

    render(){
        const {name, email, faxNumber, refNumber} = this.state

        return(
            <tr>
        <td>
            <input
            type="text"
            required="required"
            value={name}
            onChange={this.changeName}
            />
        </td>
        <td>
        <input
            type="text"
            required="required"
            value={email}
            onChange={this.changeEmail}
            />
        </td>
        <td>
        <input
            type="text"
            required="required"
            value={faxNumber}
            onChange={this.changeFaxNumber}
            />
        </td>
        <td>
        <input
            type="text"
            required="required"
            value={refNumber}
            onChange={this.changeRefNumber}
            />
        </td>
        <td>
        <button type="button" className="checkbox-button">
        <input type="checkbox" className="checkbox"/></button>
        </td>
        <td>
        <button type="button" className="checkbox-button">
        <input type="checkbox" className="checkbox"/></button>
        </td>
        <td>
            <button type="button" className="checkbox-button">
            <input type="checkbox" className="checkbox"/></button>
            </td>
        <td>
        <button type="button" className="checkbox-button">
        <input type="checkbox" className="checkbox"/></button>
        </td>
        </tr>
        )
    }
}

export default InputData