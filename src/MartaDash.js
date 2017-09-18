
import React, { Component } from 'react';

class MartaDash extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>
          Click me
        </button>
        {
          this.props.marta ?
            this.props.marta.map((item, idx) => (
              <p key={idx}>{item.DESTINATION}: {item.STATION} ({item.WAITING_SECONDS}s)</p>
            ))
            : <p></p>

        }
      </div>
    );
  }
}

export default MartaDash;

