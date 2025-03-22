import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-text">
            Simple Integral Approximation Calculator
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;