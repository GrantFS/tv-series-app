import { Link } from "react-router-dom"
import { Component } from "react"
import "./index.css"

class SeriesList extends Component {
    openItem(e, show_id) {
        e.preventDefault()
        window.location = `/series/${show_id}`
    }

    render() {
        const { list } = this.props
        return (
            <div className="series-list center">
                <ul>
                    {list.map((series) => (
                        <li key={series.show.id}>
                            <Link
                                to={`/series/${series.show.id}`}
                                onClick={(e) => {
                                    this.openItem(e, series.show.id)
                                }}
                            >
                                {series.show.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SeriesList
