import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCharacters, getCharactersLoading, getCharactersError } from '../selectors/charactersSelectors';
import { fetchCharacters } from '../actions/characterActions';
import Characters from '../components/characters/Characters';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h1>Wait a sec - this is loading</h1>;
    return <Characters characters={this.props.characters} />;
  }
}

const mapStateToProps = state => ({
  characters: getAllCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);

