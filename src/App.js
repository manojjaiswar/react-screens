import React from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Footer from './components/Footer';
import Defiindexs from './components/Defiindexs';
import { LatestNews } from './components/LatestNews';

function App() {
  return (
    <>
      {/* <div class="content-container">
        <Footer />
      </div> */}
      <div className="footer--pin">
        <div><Defiindexs /></div>
      </div>

      {/* <LatestNews /> */}

    </>

  );
}
export default App;
