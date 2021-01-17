import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
