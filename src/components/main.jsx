import React, { Component } from 'react';
import Results from './results/results';
import SavedProperties from './savedProperties/savedProperties';
import data from '../data';
import { connect } from 'react-redux';
import { setSavedProperties } from '../redux/savedProperties/savedProperties.actions'
import { setResults } from '../redux/results/results.actions'

class Main extends Component {
    componentDidMount() {
        this.props.setResults(data.results);
        this.props.setSavedProperties(data.saved);
    }

    render() {
        return (
            <div className="App row">
                <div className="col-6">
                    <Results />
                </div>
                <div className="col-6">
                    <SavedProperties />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setSavedProperties: list => dispatch(setSavedProperties(list)),
    setResults: list => dispatch(setResults(list))
});

export default connect(null, mapDispatchToProps)(Main);