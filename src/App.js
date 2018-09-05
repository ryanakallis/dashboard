import React from 'react';
import Dash from './components/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Dash  />
        {/* <h1>To Do List</h1>
        <ul>
          {this.props.list.map(function(listValue){
            return <li>{listValue}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;