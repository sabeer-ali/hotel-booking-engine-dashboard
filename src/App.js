import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Dashboard } from "@material-ui/icons";
// import { DashboardPage, LoginPage, ManageHotel } from "./Pages";
import { Sidebar } from "./Components";

const MainWrapper = () => {
  return (
    <div className="row col-12" style={{ height: "100vh" }}>
      <Sidebar />
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <MainWrapper />
      </Router>
    </div>
  );
}

export default App;
