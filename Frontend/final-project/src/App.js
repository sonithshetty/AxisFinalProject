import { BrowserRouter, Route, Switch } from "react-router-dom";
import FaxDetails from "./components/FaxDetails";
import SelectApiMethod from "./components/SelectApiMethod";
import AccountDetails from "./components/AccountDetails";
import "./App.css";
//import EmployeeLogin from "./components/EmployeeLogin";
//import EmployeeLogin from "./components/EmployeeComponent/index.js";
import EmployeeComponent from "./components/EmployeeComponent/index.js";
import SelectApiMethodChecker from "./components/SelectApiMethodChecker";
import ManegerComponent from "./components/ManegerComponent";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SelectApiMethod} />
      <Route exact path="/checker" component={SelectApiMethodChecker} />
      <Route exact path="/fax-method" component={FaxDetails} />
      <Route exact path="/total-faxes" component={AccountDetails} />
      <Route exact path="/employeelogin" component={EmployeeComponent}/>
      <Route exact path="/manegerlogin" component={ManegerComponent}/>
    </Switch>
  </BrowserRouter>
);

export default App;
