"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
    		</hgroup>
    	);
    } else {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp; or &nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  render() {
    return (
      <div>
        <header>
          <h1>Welcome!</h1>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
