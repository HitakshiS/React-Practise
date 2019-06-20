import ActionTypes from "./ActionTypes";
import {combineReducers} from "redux";

const INITIAL_STATE = {

counter : 0

};

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case ActionTypes.ADD_VALUE: {
			return {...state, counter: state.counter + 1 };
		}
		case ActionTypes.SUB_VALUE: {
			return {...state, counter: state.counter - 1 };
		}
		case ActionTypes.RESET: {
			return {...state, counter: 0 };
		}
		default:
			return state;
	}
};


export default combineReducers({
reducer
}); 