import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./nav/Nav";
import AddLink from "./ComponentA/AddLink";
import ShowLinks from "./ComponentB/ShowLinks";
import RunLinks from "./ComponentC/RunLinks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/Home" exact={"true"} component={AddLink} />
            <Route path="/ListOfLinks" component={ShowLinks} />
            <Route path="/ShowLinks" component={RunLinks} />
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
