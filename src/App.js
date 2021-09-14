import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Home from "./components/pages/Home";


function App() {
  return (
    <Router>
    <Home />
      <Routes />
    </Router>
  );
}

export default App;
