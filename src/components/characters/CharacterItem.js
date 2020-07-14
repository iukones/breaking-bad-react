import React from 'react'

const CharacterItem = ({ item }) => {
  // console.log(item);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={ item.img } alt='Breaking character' />
        </div>
        <div className='card-back'>
          <h1> { item.name } </h1>
          <ul>
            <li>
              <p><strong>Nombre del actor:</strong> {item.portrayed}</p>
            </li>
            <li>
              <p><strong>Apodo:</strong> {item.nickname}</p>
            </li>
            <li>
              <p><strong>Cumpleaños:</strong> {item.birthday}</p>
            </li>
            <li>
              <p><strong>Status:</strong> {item.status}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
