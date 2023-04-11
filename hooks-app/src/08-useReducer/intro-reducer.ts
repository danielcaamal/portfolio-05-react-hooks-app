import { TodoInterface } from "../interfaces/08-useReducer/TodoApp";

const initialState : TodoInterface[] = [
    { id: 1, description: 'Buying a car', done: false },
    { id: 2, description: 'Buying a house', done: false },
]

const todoReducer = (state: TodoInterface[] = initialState, action?: {type?: string, payload: TodoInterface}) => {
    switch (action?.type) {
        case 'add':
            return [...state, action.payload]
        default:
            break;
    }

    return state;
}

let todos = todoReducer(initialState);

const newTodo = {
    id: 3,
    todo: 'Buying a laptop',
    done: false
}

const addTodoAction: any = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)