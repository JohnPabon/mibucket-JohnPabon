import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import './css/App.css';
import Home from './Components/Home';

function Routes() {
  return (
    <Router className="App">
      <Route path="/">
          <Home />
      </Route>
    </Router>
  );
}

export default Routes;
