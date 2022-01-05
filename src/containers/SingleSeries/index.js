import Loader from "../../components/Loader"
import Show from "../../components/Show"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { bindActionCreators } from "redux"
import { ensureLoaded } from "../../store/actions"

const SingleSeries = ({ series, isLoaded, ensureLoaded: ensureIsLoaded }) => {
    const { id } = useParams()

    useEffect(() => {
        ensureIsLoaded([{ id: id, name: "series" }])
    }, [id])

    if (!isLoaded) {
        return (
            <div>
                <header className="App-header">
                    <h1>TV Series</h1>
                </header>
                <div className="container">
                    <div className="row">
                        <Loader />
                    </div>
                </div>
            </div>
        )
    }
    return <Show show={series} series={series} />
}
const mapStoreToProps = (store) => {
    return {
        series: store.series.data,
        isLoaded: store.series.isLoaded,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ensureLoaded }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(SingleSeries)
