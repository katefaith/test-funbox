import React from 'react';

import Catalog from '../catalog/catalog'

import './app.scss';

const App = () => {

  return (
    <div className="app">
      <div className="wrapper">
        <h1 className="heading">Ты сегодня покормил кота?</h1>
        <Catalog />
      </div>
    </div>
  );
}

export default App;
