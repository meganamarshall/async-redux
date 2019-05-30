import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  return (
    <section>
      <img src={character.image} />
      <p>Name: {character.name}</p>
      <p>Affiliation: {character.affiliation}</p>
      <p>Position: {character.position}</p>
      <p>Weapon: {character.weapon}</p>
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    weapon: PropTypes.string.isRequired
  })
};

export default CharacterDetail;
