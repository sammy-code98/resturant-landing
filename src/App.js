import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
function App() {
  return (
    <Router>
      <GlobalStyles />
        <Navbar />{" "}
        <Hero />
  </Router>
  );
}

export default App;
