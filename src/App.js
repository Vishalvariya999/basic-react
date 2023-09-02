import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoute from "./Router/AllRoute";
import Header from "./shared/components/Header";
import Dashboard from "./shared/components/Dashboard";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
