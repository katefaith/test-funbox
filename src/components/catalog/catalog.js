import React from 'react';
import Product from '../product/product';

import './catalog.scss';

const Catalog = () => {

  return (
    <div className="catalog">
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Catalog;
