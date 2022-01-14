import React from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Footer from './components/Footer';
import Defiindexs from './components/Defiindexs';
import { LatestNews } from './components/LatestNews';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <>
      <div className='navbarSpace'></div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LatestNews} />
          <Route exact path="/footer" component={Footer} />
          <Route path="/defiindexs" component={Defiindexs} />
          <Route exact path="/latestNews" component={LatestNews} />
        </Switch>
      </Router>

    </>
  );
}
export default App;
