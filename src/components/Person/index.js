import dayjs from "dayjs"
import { Component } from "react"

class Person extends Component {
    render() {
        const { person } = this.props
        let birthday = dayjs(person.birthday).format("DD MMMM YYYY")

        let deathday = ""
        if (person.deathday !== null) {
            deathday = dayjs(person.deathday).format("DD MMMM YYYY")
        }
        return (
            <div>
                <div className="image">
                    {person.image !== null && (
                        <img src={person.image.medium} alt={`${person.name}`} className="img-50" />
                    )}
                </div>
                <div className="row2 table-frame">
                    <span className="left bordered">Name:</span>
                    <span className="bordered">
                        <a href={`/person/${person.id}`}>{person.name}</a>
                    </span>
                    <span className="left bordered">Gender:</span>
                    <span className="bordered">{person.gender}</span>
                    <span className="left bordered">Birthday:</span>
                    <span className="bordered">{birthday}</span>
                    {deathday !== "" && <span className="left bordered">Died:</span>}
                    {deathday !== "" && <span className="bordered">{deathday}</span>}

                    <span className="left bordered">Country:</span>
                    <span className="bordered">{person.country !== null && person.country.name}</span>
                </div>
            </div>
        )
    }
}

export default Person
