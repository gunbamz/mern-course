import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return(
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return([
          <li key="a">
            <Payments />
          </li>,
          <li key="b">
            <a href="/api/logout">Logout</a>
          </li>
        ]);
    }
  }

  render() {
    return (<nav>
      <div className="nav-wrapper">
        <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
        <ul className="right">
          {this.renderContent()}
        </ul>
      </div>
    </nav>);
  }
}

const mapStateToProps = function mapStateToProps({auth}) {
  return {auth};
};

export default connect(mapStateToProps)(Header);
