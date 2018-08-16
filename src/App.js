import React, { Component } from 'react';
import axios from 'axios';
import RepoList from './components/RepoList';
import RepoDescription from './components/RepoDescription';

import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    repos: []
  }
  componentDidMount() {
    axios.get('https://api.github.com/repositories')
      .then(res => {
        this.setState({
          repos: res.data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <h1>
          Github Repository Browser
        </h1>
        <Switch>
          <Route exact path='/'>
            <RepoList repos={this.state.repos} />
          </Route>
          <Route path='/:id' render={({ match }) => (<RepoDescription repos={this.state.repos} id={match.params.id} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
