import Series from "../../containers/Series"
import SingleSeries from "../../containers/SingleSeries"
import Season from "../../containers/Season"
import Cast from "../../containers/Cast"
import Images from "../../containers/Images"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
import People from "../../containers/People"
import { Route, Routes } from "react-router-dom"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Series />} />
            <Route exact path="/series/:id" element={<SingleSeries />} />
            <Route exact path="/season/:id" element={<Season />} />
            <Route exact path="/person/:id" element={<People />} />
            {/* <Route exact path="/showings/:id" element={<SingleSeries />} /> */}
            <Route exact path="/cast/:id" element={<Cast />} />
            <Route exact path="/images/:id" element={<Images />} />
        </Routes>
    )
}

export default Main
