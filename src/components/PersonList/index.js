import { Link } from "react-router-dom"
import { Component } from "react"
import "./index.css"

class PersonList extends Component {
    openItem(e, person_id) {
        e.preventDefault()
        window.location = `/person/${person_id}`
    }

    render() {
        const { list } = this.props
        return (
            <div className="person-list center">
                <ul>
                    {list.map((item) => (
                        <li key={item.person.id}>
                            <Link
                                to={`/person/${item.person.id}`}
                                onClick={(e) => {
                                    this.openItem(e, item.person.id)
                                }}
                            >
                                {item.person.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PersonList
