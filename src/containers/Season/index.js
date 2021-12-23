import { useEffect } from "react"
import Loader from "../../components/Loader"
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ensureLoaded } from "../../store/actions"
import dayjs from "dayjs"
import "./index.css"

const getSeasonItem = (season) => {
    let premiered = ""
    if (season.premiereDate) {
        premiered = dayjs(season.premiereDate).format("DD MMMM YYYY")
    }
    return (
        <div className="bordered" key={season.number}>
            <Link to={`/`}>
                <h2>Season {season.number}</h2>
                {season.image !== null && <img src={season.image.medium} alt={`Season ${season.number}`} />}
                <div className="row2 table-frame m-20">
                    <span className="left bordered">First Aired:</span>
                    <span className="bordered">{premiered}</span>
                    <span className="left bordered">Number of Episodes:</span>
                    <span className="bordered">
                        {season.episodeOrder !== null && season.episodeOrder}
                        {season.episodeOrder == null && "Unknown"}
                    </span>
                </div>
            </Link>
        </div>
    )
}

const Season = ({ series, seasons, isLoaded, ensureLoaded: ensureIsLoaded }) => {
    const { id } = useParams()

    useEffect(() => {
        ensureIsLoaded([
            { id: id, name: "series" },
            { id: id, name: "seasons" },
        ])
    }, [id])

    return (
        <div>
            <header className="App-header">
                <h1>{series.name} Seasons</h1>
            </header>

            {!isLoaded && (
                <div className="container">
                    <div className="row">
                        <Loader spin={true} />
                    </div>
                </div>
            )}
            {isLoaded && seasons !== null && (
                <div className="season-container">
                    {seasons.map((season) => {
                        return getSeasonItem(season)
                    })}
                </div>
            )}
        </div>
    )
}

const mapStoreToProps = (store) => {
    return {
        series: store.series.data,
        seasons: store.seasons.data,
        isLoaded: store.seasons.isLoaded,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ensureLoaded }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(Season)
