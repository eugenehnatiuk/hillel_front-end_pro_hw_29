import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue,
      countClass: props.countClass,
    };
  }
  componentDidMount() {
    console.log('Mount complited');
  }
  componentDidUpdate() {
    console.log('Updated');
  }

  increment = () =>
    this.setState((prevState) => ({
      count: prevState.count + 1,
      countClass:
        prevState.count + 1 < 0
          ? 'main-section__count--zero'
          : 'main-section__count',
    }));

  decrement = () =>
    this.setState((prevState) => ({
      count: prevState.count - 1,
      countClass:
        prevState.count - 1 < 0
          ? 'main-section__count--zero'
          : 'main-section__count',
    }));

  reset = () => this.setState({ count: 0, countClass: 'main-section__count' });

  render = () => {
    const { count, countClass } = this.state;

    return (
      <div className={this.props.className}>
        <p className="main-section__title">Simple Counter on React</p>
        <div className="main-section__counter">
          <button
            className="main-section__decrement"
            onClick={(event) => this.decrement()}
          >
            -
          </button>
          <span className={countClass}>{count}</span>
          <button
            className="main-section__increment"
            onClick={(event) => this.increment()}
          >
            +
          </button>
        </div>
        <button
          className="main-section__reset-btn"
          onClick={() => this.reset()}
        >
          Reset
        </button>
      </div>
    );
  };
}

export default Counter;
