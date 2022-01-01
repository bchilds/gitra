import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/landing';
import './main.css';

const App = () => (
  <React.StrictMode>
    <div className='app-root'>
      <LandingPage />
    </div>
  </React.StrictMode>
);
ReactDOM.render(<App />, document.getElementById('root'));
