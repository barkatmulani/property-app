import ACTION from './results.const'

const INITIAL_STATE = [];

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION.SET_RESULTS:
            return [ ...action.payload ];
        default:
            return state;
    }
}

export default resultsReducer;