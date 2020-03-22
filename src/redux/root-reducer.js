import { combineReducers } from 'redux';
import savedPropertiesReducer from './savedProperties/savedProperties.reducer';
import resultsReducer from './results/results.reducer';

export default combineReducers({
    savedProperties: savedPropertiesReducer,
    results: resultsReducer
});