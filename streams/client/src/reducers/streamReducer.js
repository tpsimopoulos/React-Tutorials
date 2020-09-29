import {
    CREATE_STREAM, FETCH_STREAM,
    FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM
} from '../actions/types.js';
import _ from 'lodash';


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };  // use key interpolation to set new object's key as id assigned by json-server api
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }; // mapKeys returns an object of objects so we use spread operator to extract all the objects within the enclosing object
        case DELETE_STREAM:
            return _.omit(state, action.payload); // creates new object without whatever object is represented by action.payload
        default:
            return state;
    }
}

// if you create multiple streams then you will have a state 
// object with multiple streams hence the spread operator