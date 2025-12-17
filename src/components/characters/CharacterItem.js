import { memo } from 'react';

const CharacterItem = memo(({ item }) => (
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="card-back">

        <h1>{item.name}</h1>
        <ul>
          <li>
            <strong>Especie:</strong> {item.species}
          </li>
          <li>
            <strong>Tipo:</strong> {item.type || 'No especificado'}
          </li>
          <li>
            <strong>Género:</strong> {item.gender}
          </li>
          <li>
            <strong>Estado:</strong> {item.status}
          </li>
        </ul>
      </div>
    </div>
  </div>
));

CharacterItem.displayName = 'CharacterItem';

export default CharacterItem;
