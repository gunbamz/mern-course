import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Emaily</a>
        <ul className="right">
          <li>
            <a>Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>);
  }
}

export default Header;
