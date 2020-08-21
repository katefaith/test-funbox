import React from 'react';

import Catalog from '../catalog/catalog'

import './app.scss';

const App = () => {

  const data = [
    {
      descr: 'с фуа-гра',
      features: ['10 порций', 'мышь в подарок'],
      weight: '0,5',
      disabled: false,
      id: 1,
    },
    {
      descr: 'с рыбой',
      features: ['20 порций', '2 мыши в подарок'],
      weight: '2',
      disabled: false,
      id: 2,
    },
    {
      descr: 'с курой',
      features: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      weight: '5',
      disabled: true,
      id: 3,
    },
  ];

  return (
    <div className="app">
      <div className="wrapper">
        <h1 className="heading">Ты сегодня покормил кота?</h1>
        <Catalog products={data}/>
      </div>
    </div>
  );
}

export default App;
