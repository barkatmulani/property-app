import ACTION from './results.const'

const INITIAL_STATE = {
    list: []
}

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION.SET_RESULTS:
            return { list: action.payload };
        default:
            return state;
    }
}

export default resultsReducer;