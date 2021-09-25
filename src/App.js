import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import SingleUser from './components/users/SingleUser';
import GithubState from './context/github/githubState';
import AlertsContext from './context/alerts/alertsContext';
import About from './components/pages/About';

export default function App() {
  return (
    <GithubState>
      <AlertsContext>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <User />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/users/:login'
                  render={(props) => (
                    <Fragment>
                      <SingleUser {...props} />
                    </Fragment>
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertsContext>
    </GithubState>
  );
}
