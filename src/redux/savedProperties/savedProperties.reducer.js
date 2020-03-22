import ACTION from './savedProperties.const'

const INITIAL_STATE = {
    list: []
}

const savedPropertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION.SET_SAVED_PROPERTIES:
            return { list: action.payload };
        case ACTION.ADD_SAVED_PROPERTY:
            if(state.list.includes(action.payload))
                return state;
            return { list: [...state.list, action.payload] };
        case ACTION.REMOVE_SAVED_PROPERTY:
            let index = state.list.indexOf(action.payload);
            if(index === -1) return state;
            let list = state.list.filter((x,i) => i !== index);
            return { list }
        default:
            return state;
    }
}

export default savedPropertiesReducer;