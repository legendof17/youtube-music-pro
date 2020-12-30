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
        {/* <Route path='/Legendof17' exact render={() => (window.location = "https://github.com/legendof17")} /> */}
        {/* <Route path='/github' exact render={() => (window.location = "https://github.com/legendof17/youtube-music-pro")} /> */}
        <Redirect path='*' to='/' />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
