import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import style from '../Dropdown/Dropdown.module.css';

class Dropdown extends Component {
  // static propTypes = {

  // }

  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={style.Dropdown}>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
            {this.state.visible? 'Cховати':'Подивитись'}
          
        </button>

        {this.state.visible && (
          <div className={style.Dropdown__menu}>Випадаюче меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
