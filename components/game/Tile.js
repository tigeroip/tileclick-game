import React, { Component } from 'react';

class Tile extends Component {
  render() {
    return (
      <div className="tile">
          <div className={this.props.className} onClick={() => this.props.handleClick(this.props.active)}></div>
          <style jsx>{`
      .tile {
        border: 1px solid white;
        background: #03A9F4;
        height: 33%;
        width: 33%;
        margin: 0;
    }
    
    .active {
        height: 100%;
        width: 100%;
        cursor: pointer;
        background: red;
      }
      `}</style>
      </div>
    );
  }
}

export default Tile;