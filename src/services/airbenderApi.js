import avatar from '../../assets/airbender.jpeg';

const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch Characters';

      return json;
    });
};

export const getCharacters = () => {
  return get('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(json => {
      return json.map(character => ({
        id: character._id,
        name: character.name,
        image: character.photoUrl || avatar
      }));
    });
};

export const getOneCharacter = id => {
  console.log(id);
  return get(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(json => ({
      id: json._id,
      name: json.name,
      position: json.position,
      image: json.photoUrl,
      weapon: json.weapon,
      affiliation: json.affiliation
    }));
};
