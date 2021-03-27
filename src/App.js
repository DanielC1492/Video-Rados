import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';
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
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
