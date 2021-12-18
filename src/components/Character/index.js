import { Component } from "react"

class Character extends Component {
    render() {
        const { character } = this.props
        return (
            <div>
                <div className="image">
                    {character.image !== null && (
                        <img src={character.image.medium} alt={`${character.name}`} className="img-50" />
                    )}
                </div>
                <h3>{character.name}</h3>
            </div>
        )
    }
}

export default Character
