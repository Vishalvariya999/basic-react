import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./shared/components/Header";
import Dashboard from "./shared/components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Dashboard />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
