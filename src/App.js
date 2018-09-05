import React from 'react';
import Dash from './components/Dashboard';
import About from './components/About';
import Header from './components/header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>         
      </div>
    );
  }
}

export default App;