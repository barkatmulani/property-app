import React, { Component } from 'react';
import Results from './results/results';
import SavedProperties from './savedProperties/savedProperties';
import { connect } from 'react-redux';
import { setSavedProperties } from '../redux/savedProperties/savedProperties.actions'
import { setResults } from '../redux/results/results.actions'
import './main.css';
import { ApiService } from '../services/property-service';

class Main extends Component {
    results$ = {};
    savedProperties$ = {};

    componentDidMount() {
        let apiService = new ApiService();
        let results = [];
        let properties = [];
        let comp = this;

        this.results$ = apiService.getAllResults().subscribe({
            next(data) { results.push(data) },
            complete() { comp.props.setResults(results) }
        });

        this.savedProperties$ = apiService.getAllSavedProperties().subscribe({
            next(data) { properties.push(data) },
            complete() { comp.props.setSavedProperties(properties) }
        });
    }

    componentWillUnmount() {
        this.results$.unsubscribe();
        this.savedProperties$.unsubscribe();
    }

    render() {
        return (
            <>
                <p className="h1 text-center p-3">Property Management Application</p>
                
                <div className="main row m-1">
                    <div className="col-sm-6 col-xs-12 p-1">
                        <div className="border border-success rounded">
                            <Results data-test='results' />
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12 p-1">
                        <div className="border border-success rounded">
                            <SavedProperties data-test='savedProperties'/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setSavedProperties: list => dispatch(setSavedProperties(list)),
    setResults: list => dispatch(setResults(list))
});

export default connect(null, mapDispatchToProps)(Main);