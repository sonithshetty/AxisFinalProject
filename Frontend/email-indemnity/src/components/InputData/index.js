import { Component } from "react";

class InputData extends Component {
    state = {
        name: "",
        email: "",
        faxNumber: 0,
        refNumber: "",
        digitalSignature: false,
        isDisabled: false,
        modify: false,
        delete: false,
        verify: false,
    }

    //const [signature, setSignature] = useState(false);

    changeName = event => {
        this.setState({ name: event.target.value })
    }
    changeEmail = event => {
        this.setState({ email: event.target.value })
    }
    changeFaxNumber = event => {
        this.setState({ faxNumber: event.target.value })
    }
    changeRefNumber = event => {
        this.setState({ refNumber: event.target.value })
    }

    changeDigitalSignature = event => {
        this.setState({ digitalSignature: event.target.checked })
        //console.log()
    }

    checkIsDisabled (digitalSignature){
        if(digitalSignature === true){
            this.setState({isDisabled: false})
        }
        console.log(digitalSignature)
    }

    //if(digitalSignature === ture)
    

    render() {
        let { name, email, faxNumber, refNumber, digitalSignature, isDisabled } = this.state

        //this.checkIsDisabled(digitalSignature);
        
        return (
            <tr>
                <td>
                    <input
                        type="text"
                        //required="required"
                        value={name}
                        onChange={this.changeName}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        //required="required"
                        value={email}
                        onChange={this.changeEmail}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        //required="required"
                        value={faxNumber}
                        onChange={this.changeFaxNumber}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        //required="required"
                        //disabled = {isDisabled}
                        value={refNumber}
                        onChange={this.changeRefNumber}
                    />
                </td>
                <td>
                    <input type="checkbox" className="checkbox"  onChange={this.changeDigitalSignature} />
                    {/*<button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" /></button>*/}
                </td>
                <td>
                    <input type="checkbox" className="checkbox" />
                    {/*<button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" /></button>*/}
                </td>
                <td>
                    <input type="checkbox" className="checkbox" />
                    {/*<button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" /></button>*/}
                </td>
                <td>
                    <input type="checkbox" className="checkbox" />
                    {/*<button type="button" className="checkbox-button">
                        <input type="checkbox" className="checkbox" /></button>*/}
                </td>
            </tr>
        )
    }
}

export default InputData