import './App.css';
import LandingPage from './components/LandingPage'
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import SpecificCountrie from './components/SpecificCountrie'
import NavBar from "./components/NavBar"
import TouristicForm from "./components/TouristicForm"
import About from "./components/About"
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route  path="/." component={NavBar} />
      <Route exact path="/./about" component={About} />
      <Route exact path="/./touristicForm" component={TouristicForm} />
      <Route  path="/home"  component={NavBar} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/home/:id">
      <SpecificCountrie/>
        </Route> 
    </div>
  );
}

export default App;
