import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Welcome from "./components/Welcome/Welcome";
import Recipe from "./components/Recipe/Recipe";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Works />
      <Welcome />
      <Recipe />
    </Router>
  );
}

export default App;
