import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Popup from './components/Popup/Popup';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Movie from './containers/Movie/Movie';
import MyRentals from './containers/MyRentals/MyRentals';
import Order from './containers/Order/Order';
import Player from './containers/Player/Player';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
import Search from './containers/Search/Search';
import ScrollToTop from './Utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Popup/>
      <BrowserRouter>
        <ScrollToTop/>
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
          <Route path='/order' exact component={Order}/>
          <Route path='/player/:title' exact component={Player}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
