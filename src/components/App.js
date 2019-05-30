import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterDetail from '../components/characters/CharacterDetail';

export default function App() {
  return (
    <Router>
      <h1>I HAVE NEVER SEEN THIS MOVIE</h1>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
