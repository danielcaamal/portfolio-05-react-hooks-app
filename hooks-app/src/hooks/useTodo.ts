import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { TodoInterface } from "../interfaces/08-useReducer/TodoApp";

const initialState : TodoInterface[] = []

const init = () : TodoInterface[] => {
    return JSON.parse(localStorage.getItem('todos') ?? '[]');
}


export const useTodo = () => {
    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (newTodo: TodoInterface) => {
        console.log(newTodo);
        const action = {
            type: 'add',
            payload: newTodo
        };
        dispatchTodos(action);
    }

    const handleDeleteTodo = (id: number) => {
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return;
        const action = {
            type: 'delete',
            payload: todo
        };
        dispatchTodos(action);
    }

    const handleToggleTodo = (id: number) => {
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return;
        const action = {
            type: 'toggle',
            payload: todo
        };
        dispatchTodos(action);
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter((todo) => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}