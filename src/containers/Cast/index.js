import { Component } from "react"
import Loader from "../../components/Loader"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { ensureLoaded } from "../../store/actions"
import Person from "../../components/Person"
import Character from "../../components/Character"
// import './index.css';

class Cast extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.ensureLoaded([
            { id: id, name: "series" },
            { id: id, name: "cast" },
        ])
    }

    render() {
        const { cast, series } = this.props

        let isLoaded = false
        if (this.props.isLoaded) {
            isLoaded = true
        }

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
}

function mapStoreToProps(store, passed) {
    return {
        params: passed.match.params,
        series: store.series.data,
        cast: store.cast.data,
        isLoaded: store.cast.isLoaded,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ensureLoaded }, dispatch)

Cast = connect(mapStoreToProps, mapDispatchToProps)(Cast)

export default Cast
