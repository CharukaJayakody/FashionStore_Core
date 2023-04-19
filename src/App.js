import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Common/Header/Header";
import NavBar from "./Components/Common/NavBar/NavBar";
import InquiryManagement from "./Components/InquiryManagement";
import CreateInquiry from "./Components/CreateInquiry";
import Shop from "./Components/Shop/Shop";

const App = () =>{
  return (
    <Router>
      <NavBar/>
      <div className="container-fluid m-0 p-0" style={{ userSelect: "none" }}>
        <div className="row m-0 p-0">
          <div className="col-md-2 m-0 p-0">
            <Header />
          </div>
          <div className="col-md-10 m-0 p-0">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route exact path="/inquiryManagement">
                <InquiryManagement />
              </Route>
              <Route exact path="/createInquiries">
                <CreateInquiry />
              </Route>
              <Route exact path="/Shop">
                <Shop />
              </Route> 
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;