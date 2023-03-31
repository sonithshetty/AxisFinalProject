import { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import FaxDetails from './components/FaxDetails'
import SelectApiMethod from './components/SelectApiMethod';
import AccountDetails from './components/AccountDetails';
import ApiMethod from './context/ApiMethod';
import './App.css';

class App extends Component {
    state ={
        api:"--Select--",
        accountId: "",
        customerId: ""
    }

    changeMethod = value => {
        console.log(value)
        this.setState({api: value})
    }

    calcelMethod = () => {
        this.setState({api:"--Select--"})
    }

    accountIdMethod= (value) => {
        this.setState({accountId: value})
    }

    custIdMethod = value => {
        this.setState({customerId: value})
    }

    render(){
        const{api , accountId} = this.state
        return(
            <ApiMethod.Provider
            value={{
              api,
              accountId,
              accountIdMethod: this.accountIdMethod,
              changeMethod: this.changeMethod,
              calcelMethod: this.calcelMethod,
              custIdMethod: this.custIdMethod
            }}
            >
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SelectApiMethod}/>
                    <Route exact path="/fax-method" component={FaxDetails}/>
                    <Route exact paht="/total-faxes" component={AccountDetails}/>
                </Switch>
                </BrowserRouter>
            </ApiMethod.Provider>
        )
    }
} <AccountDetails />

export default App;
