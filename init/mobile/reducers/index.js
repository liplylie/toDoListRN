import { combineReducers } from 'redux';
import addTodo from "./addTodo"


const toDoApp = combineReducers({
	addTodo
})

export default toDoApp;