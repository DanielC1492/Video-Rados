import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Movie from './containers/Movie/Movie';
import MyRentals from './containers/MyRentals/MyRentals';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
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
          <Route path='/profile/my-rentals' exact component={MyRentals}/>
          <Route path='/admin' exact component={Profile}/>
          <Route path='/admin/all-rentals' exact component={MyRentals}/>
          <Route path='/register' exact component={Register}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
