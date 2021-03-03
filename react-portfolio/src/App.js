import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/About';
import Work from './components/pages/Work';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={AboutMe} />
      </Switch>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
