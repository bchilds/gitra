import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/landing';
import './main.css';

const App = () => (
  <div className='app-root'>
    <LandingPage />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
