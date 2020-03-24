import React, { Component } from 'react';
import Results from './results/results';
import SavedProperties from './savedProperties/savedProperties';
import data from '../data/data';
import { connect } from 'react-redux';
import { setSavedProperties } from '../redux/savedProperties/savedProperties.actions'
import { setResults } from '../redux/results/results.actions'
import './main.css';

class Main extends Component {
    componentDidMount() {
        this.props.setResults(data.results);
        this.props.setSavedProperties(data.saved);
    }

    render() {
        return (
            <div className="main row">
                <div className="col-6">
                    <Results data-test='results' />
                </div>
                <div className="col-6">
                    <SavedProperties data-test='savedProperties'/>
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