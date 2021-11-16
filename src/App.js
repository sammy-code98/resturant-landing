import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Welcome from "./components/Welcome/Welcome";
import Recipe from "./components/Recipe/Recipe";
import Meals from "./components/Personal/Meals";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Works />
      <Welcome />
      <Recipe />
      <Meals />
    </Router>
  );
}

export default App;
