import React, { Component } from 'react';
import { CharacterProps } from './interface';


class Character extends Component <CharacterProps> {

  render() {
    const { character } = this.props;
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
}

export default Character;
