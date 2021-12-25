import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/main';
import './main.css';

const App = () => (
  <div className='app-root'>
    <MainPage />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
