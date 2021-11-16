import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <GlobalStyles />
        <Navbar />{" "}
  </Router>
  );
}

export default App;
