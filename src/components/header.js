import React from 'react';
import Dash from './Dashboard';
import About from './About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';<MainMenu />
class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MainMenu />
          <h1>To Do List</h1>
            <Route exact path="/" component={Dash} />
            <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};
export default Header;