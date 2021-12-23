import { useEffect } from "react"
import Loader from "../../components/Loader"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ensureLoaded } from "../../store/actions"
import Person from "../../components/Person"
import Character from "../../components/Character"

const Cast = ({ series, cast, isLoaded, ensureLoaded: ensureIsLoaded }) => {
    useEffect(() => {
        ensureIsLoaded([
            { id: series.id, name: "series" },
            { id: series.id, name: "cast" },
        ])
    }, [series.id])

    return (
        <div>
            <header className="App-header">
                <h1>{series.name} Cast</h1>
            </header>

            {!isLoaded && (
                <div className="container">
                    <div className="row">
                        <Loader spin={true} />
                    </div>
                </div>
            )}
            {isLoaded && cast !== null && (
                <div className="cast-container">
                    {cast.map((member) => (
                        <div className="container" key={member.person.id}>
                            <div className="row row2 md table-frame">
                                <Character character={member.character} />
                                <Person person={member.person} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const mapStoreToProps = (store) => {
    return {
        series: store.series.data,
        cast: store.cast.data,
        isLoaded: store.cast.isLoaded,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ensureLoaded }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(Cast)
