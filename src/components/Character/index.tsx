import React from 'react';
import { CharacterProps } from './interface';

const Character = ({character}: CharacterProps) => {
  return (
    <div data-testid="character">
      <div className="image">
        {
          character.image !== null &&
          <img src={character.image.medium} alt={`${character.name}`} className="img-50" />
        }
      </div>
      <h3>
        {character.name}
      </h3>
    </div>
  )
}

export default Character;
