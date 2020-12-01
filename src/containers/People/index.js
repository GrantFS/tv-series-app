import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ensureLoaded } from "../../store/actions";
import Person from '../../components/Person';
// import './index.css';

class People extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.ensureLoaded([
      { id: id, name: "person" }
    ]);
  }

  render() {
    const { person } = this.props;

    let isLoaded = false;
    if (this.props.isLoaded) {
      isLoaded = true;
    }


// add click through from cast to person, also list out shows they are in

    return (
      <div>
        <header className="App-header">
          <h1>
            Person
          </h1>

        </header>

        {!isLoaded &&
          <div className="container">
            <div className="row">
              <Loader spin={true} />
            </div>
          </div>
        }
        {
          isLoaded && person !== null &&
          <div className="person-container">
            <div className="row">
              <div className="col">
                <Person person={person} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStoreToProps(store, passed) {
  return {
    params: passed.match.params,
    person: store.person.data,
    isLoaded: store.person.isLoaded
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ ensureLoaded }, dispatch);

People = connect(mapStoreToProps, mapDispatchToProps)(People);

export default People;

