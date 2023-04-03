import { BrowserRouter, Route, Switch } from "react-router-dom";
import FaxDetails from "./components/FaxDetails";
import SelectApiMethod from "./components/SelectApiMethod";
import AccountDetails from "./components/AccountDetails";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SelectApiMethod} />
      <Route exact path="/fax-method" component={FaxDetails} />
      <Route exact paht="/total-faxes" component={AccountDetails} />
    </Switch>
  </BrowserRouter>
);

export default App;
