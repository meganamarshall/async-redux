import avatar from '../../assets/airbender.jpeg';
export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch Characters';

      return json;
    })
    .then(json => {
      return json.map(character => ({
        id: character._id,
        name: character.name,
        image: character.photoUrl || avatar
      }));
    });
};
