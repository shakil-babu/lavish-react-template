import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';
import Service from './Components/Service/Service';
import Products from './Components/Products/Products';
import Signup from './Components/SignUp/Signup';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Service} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Signup} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
