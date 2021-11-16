import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Welcome from "./components/Welcome/Welcome";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar /> 
      <Hero />
      <Works />
      <Welcome />
    </Router>
  );
}

export default App;
