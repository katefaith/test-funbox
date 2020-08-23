import React from 'react';

import './product.scss';

export default class Product extends React.Component {

  state = {
    selected: false,
  }

  onProductInfoClick = () => {
    if (!this.props.disabled) {
      this.setState((state) => {
        return {
          selected: !state.selected,
        }
      });
    }
  };

  onActionClick = (e) => {
    e.preventDefault();
    if (!this.props.disabled && e.target.tagName === 'A') {
      this.setState({
        selected: true,
      });
    }
  };

  render() {
    const { descr, features, weight, longDescr, disabled } = this.props;
    const { selected } = this.state;

    const feat = features.map((element, index) => {
      return (
        <li key={index+1}>
          {element}
        </li>
      );
    });

    let action = <span>Чего сидишь? Порадуй котэ, <a href="/">купи</a></span>;
    let classNames = 'product';

    if (disabled) {
      action = <span>Печалька, {descr} закончился.</span>;
      classNames += ' disabled';
    }

    if (selected) {
      action = longDescr;
      classNames += ' selected';
    }

    return (
      <div className={classNames}>
        <div
          className="product-info"
          onClick={ this.onProductInfoClick }>
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

        <div className="product-action"
             onClick={ this.onActionClick }>
          {action}
        </div>
      </div>
    );
  }
}
