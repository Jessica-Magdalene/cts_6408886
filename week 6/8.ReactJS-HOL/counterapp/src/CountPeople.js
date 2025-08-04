import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ marginRight: '50px' }}>
          <button onClick={this.updateEntry} style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
            Login
          </button>
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
            {this.state.entrycount} People Entered!!!
          </span>
        </div>

        <div>
          <button onClick={this.updateExit} style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
            Exit
          </button>
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
            {this.state.exitcount} People Left!!!
          </span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
