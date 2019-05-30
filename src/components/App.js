import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterDetailPage from '../containers/CharacterDetailPage';

export default function App() {
  return (
    <Router>
      <h1>I HAVE NEVER SEEN THIS MOVIE</h1>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/:id" component={CharacterDetailPage} />
      </Switch>
    </Router>
  );
}
