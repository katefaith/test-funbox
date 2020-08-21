import React from 'react';
import Product from '../product/product';

import './catalog.scss';

const Catalog = ({ products }) => {

  const elements = products.map((element) => {

    const { id, ...elementProps } = element;

    return (
      <Product
        key={id}
        {...elementProps} />
    );
  });

  return (
    <div className="catalog">
      {elements}
    </div>
  );
}

export default Catalog;
