import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './css/App.css';
import Home from './Components/Home';
import About from './Components/AboutUs';
import FoodMenu from './Components/FoodMenu';
import Services from './Components/Services';
import PreFooter from './Components/PreFooter';
import Navbar from './Components/subcomponents/Navbar';



function Routes() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <div className="lineaSeparadora">
            <hr />
          </div>
          <About />
          <div className="lineaSeparadora">
            <hr />
          </div>
          <FoodMenu />
          <div className="lineaSeparadora">
            <hr />
          </div>
          <Services />
          <div className="lineaSeparadora">
            <hr />
          </div>
          <PreFooter />
          <div className="lineaSeparadora">
            <hr />
          </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default Routes;
