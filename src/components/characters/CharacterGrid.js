import { memo } from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = memo(({ items, isLoading }) => {
  if (isLoading) {
    return <h1 className="center">Cargando...</h1>;
  }

  if (items.length === 0) {
    return <p className="center">No se encontraron personajes</p>;
  }

  return (
    <section className="cards">

      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
});

CharacterGrid.displayName = 'CharacterGrid';

export default CharacterGrid;
