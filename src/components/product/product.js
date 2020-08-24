import React from 'react';

import './product.scss';

export default class Product extends React.Component {

  state = {
    selected: false,
    hovered: false
  }

  productInfoClassNames = 'product-info';

  onProductInfoClick = () => {
    if (!this.props.disabled) {
      this.setState((state) => {
        return {
          selected: !state.selected,
          hovered: false
        }
      });
    }

    this.productInfoClassNames = 'product-info';
  };

  onActionClick = (e) => {
    e.preventDefault();
    if (!this.props.disabled && e.target.tagName === 'A') {
      this.setState({
        selected: true,
      });
    }
  };

  onMouseEnterProductInfo = () => {
    if (this.state.selected) {
      this.setState( {
        hovered: true,
      });

      this.productInfoClassNames = 'product-info hover';
    }
  }

  onMouseLeaveProductInfo = () => {
    if (this.state.selected) {
      this.setState({
        hovered: false,
      });

      this.productInfoClassNames = 'product-info';
    }
  }

  render() {
    const { descr, features, weight, longDescr, disabled } = this.props;
    const { selected, hovered } = this.state;

    const feat = features.map((element, index) => {
      return (
        <li key={index+1}>
          {element}
        </li>
      );
    });

    let action = <span>Чего сидишь? Порадуй котэ, <a href="/">купи</a></span>;
    let productClassNames = 'product';

    if (disabled) {
      action = <span>Печалька, {descr} закончился.</span>;
      productClassNames += ' disabled';
    }

    if (selected) {
      action = longDescr;
      productClassNames += ' selected';
    }

    return (
      <div className={productClassNames}>
        <div
          className={this.productInfoClassNames}
          onClick={ this.onProductInfoClick }
          onMouseEnter={ this.onMouseEnterProductInfo }
          onMouseLeave={ this.onMouseLeaveProductInfo }>
          <header className="product-header">
            {(selected && hovered) ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
          </header>
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

        <div className="product-action"
             onClick={ this.onActionClick }>
          {action}
        </div>
      </div>
    );
  }
}
