import React from 'react';
import List from './list';
import Header from './header';

class Dash extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <List/>
      </div>
    );
  }
}

export default Dash;