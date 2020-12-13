import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {default as Navbar} from './components/Navbar';
import Home from './pages';

function App() {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect path='*' to='/' />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
