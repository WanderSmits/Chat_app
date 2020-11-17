import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="parent">
          <Router>
            <div className="nav">
              <Header />
            </div>
            <div className="side">
              <Sidebar />
            </div>
            <div className="main">
              <Main />
              <Switch>
                <Route path="/channel/:channelId">
                  <Chat />
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
