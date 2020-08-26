import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from "./pages/About";
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home"  component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/>  
    </Router>
  );
}

export default App;
