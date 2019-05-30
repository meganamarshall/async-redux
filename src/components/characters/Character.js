import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <Link to={`/`}>
      <img src={character.image} />
      <p>{character.name}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Character;
