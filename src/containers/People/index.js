import { useEffect } from "react"
import Loader from "../../components/Loader"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ensureLoaded } from "../../store/actions"
import Person from "../../components/Person"
import { useParams } from "react-router-dom"

const People = ({ person, isLoaded, ensureLoaded: ensureIsLoaded }) => {
    const { id } = useParams()
    useEffect(() => {
        ensureIsLoaded([{ id: id, name: "person" }])
    }, [id])

    return (
        <div>
            <header className="App-header">
                <h1>{person.name}</h1>
            </header>

            {!isLoaded && (
                <div className="container">
                    <div className="row">
                        <Loader spin={true} />
                    </div>
                </div>
            )}
            {isLoaded && person !== null && (
                <div className="person-container">
                    <div className="row">
                        <div className="col">
                            <Person person={person} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStoreToProps = (store) => {
    return {
        person: store.person.data,
        isLoaded: store.person.isLoaded,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ensureLoaded }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(People)
