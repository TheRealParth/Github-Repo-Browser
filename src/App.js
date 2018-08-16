import React, { Component } from 'react';
import axios from 'axios';
import RepoList from './components/RepoList';
import RepoDescription from './components/RepoDescription';
import { Route, Switch } from 'react-router-dom';
import keyBy from 'lodash.keyby';
import './App.css';

class App extends Component {
  state = {
    repos: [],
    reposById: {}
  }
  componentDidMount() {
    axios.get('https://api.github.com/repositories')
      .then(res => {
        this.setState({
          repos: res.data,
          reposById: keyBy(res.data, 'id')
        })
      })


  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header">
            <h2>
              Github Repository Browser
            </h2>
          </div>

          <Switch>
            <Route exact path='/'>
              <RepoList repos={this.state.repos} />
            </Route>
            <Route path='/:id' render={
              ({ match }) => (
                <RepoDescription repos={this.state.reposById} id={match.params.id} />
              )
            } />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
