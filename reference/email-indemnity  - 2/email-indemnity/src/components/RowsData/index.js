import { Component } from "react"
import "./index.css"
class RowsData extends Component {

    state = {
        refNum: false
    }

    changeData = () => {
        const { rowsData, modifyData } = this.props
        const { id } = rowsData
        modifyData(id)
    }

    deleteData = () => {
        const { rowsData, deleteRowData } = this.props
        const { id } = rowsData
        deleteRowData(id)
    }

    showRefNum = event => {
        this.setState(prevState => ({ refNum: !prevState.refNum }))
    }

    render() {
        const { rowsData, modifyData, deleteRowData } = this.props
        const { id, name, email,
            faxNumber,
            refNumber } = rowsData
        const { refNum } = this.state

        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{faxNumber}</td>
                {refNum ? <td>{refNumber}</td> : <td></td>}
                <td><button type="button" className="checkbox-button">
                    <input type="checkbox" className="checkbox" onClick={this.showRefNum} /></button></td>
                <td><button type="button" className="checkbox-button" onClick={this.deleteData}>
                    <input type="checkbox" className="checkbox" /></button></td>
                <td><button type="button" className="checkbox-button" onClick={this.changeData}>
                    <input type="checkbox" className="checkbox" /></button></td>
                <td><button type="button" className="checkbox-button">
                    <input type="checkbox" className="checkbox" /></button></td>
            </tr>
        )
    }

}
export default RowsData