//import logo from './logo.svg';
import './App.css';
import MainSlider from "../src/components/MainSlider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="main">
        <Route exact path="/" component={MainSlider}> </Route>
        <MainSlider />
        <Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
