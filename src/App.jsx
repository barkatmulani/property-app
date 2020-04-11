import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setSavedProperties } from './redux/savedProperties/savedProperties.actions'
import { setResults } from './redux/results/results.actions'
import { ApiService } from './services/property-service';

class App extends Component {
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

  render() {
    return (
      <Main />
    );
  }

  componentWillUnmount() {
    this.results$.unsubscribe();
    this.savedProperties$.unsubscribe();
  }  
}

const mapDispatchToProps = dispatch => ({
  setSavedProperties: list => dispatch(setSavedProperties(list)),
  setResults: list => dispatch(setResults(list))
});

export default connect(null, mapDispatchToProps)(App);