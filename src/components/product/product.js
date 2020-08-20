import React from 'react';

import './product.scss';

const Product = () => {

    return (
      <div className="product">
        <div className="product-info">
          <header className="product-header">Сказочное заморское яство</header>
          <main>
            <h2 className="product-heading">Нямушка</h2>
            <p className="product-descr">с фуа-гра</p>
            <ul className="product-features">
              <li>10 порций</li>
              <li>мышь в подарок</li>
            </ul>
            <div className="product-weight">
              <div>0,5</div>
              кг
            </div>
          </main>

        </div>
        <div className="product-action">
          Чего сидишь? Порадуй котэ, <a href="/">купи</a>
        </div>
      </div>
    );
}

export default Product;
