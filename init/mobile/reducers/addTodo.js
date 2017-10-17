
const initialState = {
	todos: [],
}

const addTodo = (state = initialState, action) => {
	if (action.type === "ADD_TODO"){
		return Object.assign({}, state, { todos: [...state.todos, {text: action.text, completed: false}]})
	}
	return state;
}

export default addTodo;