import React from 'react';

import './product.scss';

const Product = ({ descr, features, weight, disabled }) => {

  const feat = features.map((element, index) => {

    return (
      <li key={index+1}>
        {element}
      </li>
    );
  });

  const action = (disabled) ?
    <span>Печалька, {descr} закончился.</span> :
    <span>Чего сидишь? Порадуй котэ, <a href="/">купи</a></span>;

  return (
    <div className="product">
      <div className="product-info">
        <header className="product-header">Сказочное заморское яство</header>
        <main>
          <h2 className="product-heading">Нямушка</h2>
          <p className="product-descr">{descr}</p>
          <ul className="product-features">
            {feat}
          </ul>
          <div className="product-weight">
            <div>{weight}</div>
              кг
            </div>
        </main>

      </div>
      <div className="product-action">
        {action}
      </div>
    </div>
  );
}

export default Product;
