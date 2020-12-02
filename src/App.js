import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import SaleView from "./views/SaleView";
import AdminView from "./views/AdminView";

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/admin">
          <AdminView></AdminView>
        </Route>
        <Route path="/">
          <SaleView></SaleView>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
