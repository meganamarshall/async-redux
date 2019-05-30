import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacter, getCharacterLoading, getCharacterError } from '../selectors/characterSelectors';
import { fetchCharacter } from '../actions/characterDetailActions';
import CharacterDetail from '../components/characters/CharacterDetail';

class CharacterDetailPage extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h1>Patience, please</h1>;
    return <CharacterDetail character={this.props.character} />;
  }
}

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharacterLoading(state),
  error: getCharacterError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacter());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailPage);
