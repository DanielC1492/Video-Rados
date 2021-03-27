import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Movie from './containers/Movie/Movie';
import Profile from './containers/Profile/Profile';
import Search from './containers/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movie' exact component={Movie}/>
          <Route path='/search/:query' exact component={Search}/>
          <Route path='/genre/:genre' exact component={Search}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/profile' exact component={Profile}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
