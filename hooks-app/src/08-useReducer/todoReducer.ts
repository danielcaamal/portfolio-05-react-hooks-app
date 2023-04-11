import { TodoInterface } from "../interfaces/08-useReducer/TodoApp";

export const todoReducer = (state: TodoInterface[] = [], action: { type:string, payload: TodoInterface }): TodoInterface[] => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'toggle':
            return state.map(
                (todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                }
            )
        default:
            return state;
    }
}