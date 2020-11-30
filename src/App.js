import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

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

            <div className="chat">
              <Route exact path="/" component={Main}>
                <Main />
              </Route>
              <Route path="/channel/:channelId">
                <Chat />
              </Route>
            </div>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
