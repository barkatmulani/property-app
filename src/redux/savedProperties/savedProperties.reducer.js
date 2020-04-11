import ACTION from './savedProperties.const'

const INITIAL_STATE = [];

const savedPropertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION.SET_SAVED_PROPERTIES:
            return [ ...action.payload ];
        case ACTION.ADD_SAVED_PROPERTY:
            if(state.includes(action.payload))
                return state;
            return [...state, action.payload];
        case ACTION.REMOVE_SAVED_PROPERTY:
            let index = state.length ? state.indexOf(action.payload) : -1;
            if(index === -1) return state;
            let list = state.filter((x,i) => i !== index);
            return list
        default:
            return state;
    }
}

export default savedPropertiesReducer;