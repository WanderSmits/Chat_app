import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="parent">
      <div className="nav">
        <Navbar />
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
