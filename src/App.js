import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="parent">
      <div className="nav">
        <Header />
      </div>
      <div className="side">
        <Sidebar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
