import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import Season from '../../containers/Season';
import Cast from '../../containers/Cast';
import Images from '../../containers/Images';
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
import People from '../../containers/People';

const Main = props => {
    return (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route exact path="/series/:id" component={SingleSeries} />
        <Route exact path="/season/:id" component={Season} />
        <Route exact path="/person/:id" component={People} />
        {/* <Route exact path="/showings/:id" component={SingleSeries} /> */}
        <Route exact path="/cast/:id" component={Cast} />
        <Route exact path="/images/:id" component={Images} />
    </Switch>
    )
}

export default Main;
