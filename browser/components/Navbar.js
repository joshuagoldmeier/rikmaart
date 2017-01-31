import React from 'react';
import { Link, browserHistory } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/home"><img src="https://static.wixstatic.com/media/bf733c_314b00a51ec743b79dc1f3e807c6318d.png/v1/fill/w_600,h_70,al_c,usm_0.66_1.00_0.01/bf733c_314b00a51ec743b79dc1f3e807c6318d.png" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/home" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">About</Link>
              </li>
              <li>
                <Link to="/users" activeClassName="active">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">Contact</Link>
              </li>
              <li>
                <Link to="/products" activeClassName="active">Buy Now</Link>
              </li>
              <li>
                <Link to="/customorder" activeClassName="active">Custom Order</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Navbar;
