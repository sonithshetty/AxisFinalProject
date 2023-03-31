
import ApiMethod from "../../context/ApiMethod"
import "./index.css"

const SelectApiMethod  = props =>{
   const changePath = () => {
        const{history} = props
        history.replace("/fax-method")
    }

    return(
        (
            <ApiMethod.Consumer>
            {value => {
                const{api, changeMethod, calcelMethod} = value

                const changeApiMethod = event => {
                    changeMethod(event.target.value)
                }

                const  cancelTheProcess = () => {
                    calcelMethod()
                }


                return(
                    <div className="email-container">
                    <h1 className="email-heading">Fax/Email Indemnity</h1>
                    <div className="api-method">
                        <p className="email-function">Function<span className="email-function-star">*</span></p>
                        <select value={api} onChange={changeApiMethod} className="email-select">
                            <option>--Select--</option>
                            <option value="Add">Add</option>
                            <option value="Modify" >Modify</option>
                            <option value="Verify">Verify</option>
                            <option value="Delete">Delete</option>
                        </select>
                    </div>
                    <button type="button" className="go-button" onClick={changePath}>Go</button>
                    <button type="button" className="go-button-2" onClick={cancelTheProcess}>Cancel</button>
                </div>
                )
            }}
            </ApiMethod.Consumer>
        )
    )
}

export default SelectApiMethod