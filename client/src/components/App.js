import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {

  // componentDidMount is prefered for AJAX calls
  // also small time differenc between WillMount and DidMount
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // react router greedily matches paths
    // all components that match a path will be rendered
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// connect takes (mapStateToProps and mapActionsToProps)
export default connect(null, actions)(App);
