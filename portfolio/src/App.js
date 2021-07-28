import MainSlider from "./pages/MainSlider";
import Profile from "./pages/Profile";
import Archi from "./pages/Archi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={MainSlider} />
        <Switch>
         <Route path="/profile" component={Profile} />
         <Route path="/archi" component={Archi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
