import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacter, getCharacterLoading } from '../selectors/characterSelectors';
import { fetchCharacter } from '../actions/characterDetailActions';
import CharacterDetail from '../components/characters/CharacterDetail';

class CharacterDetailPage extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    character: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      weapon: PropTypes.string.isRequired
    }),
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h1>Patience, please</h1>;
    return <CharacterDetail character={this.props.character} />;
  }
}

const mapStateToProps = state => {
  console.log(getCharacter(state), 'hello in state to props');
  return {
    character: getCharacter(state),
    loading: getCharacterLoading(state)
  };};

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchCharacter(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailPage);
