import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movie' exact component={Movie}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
