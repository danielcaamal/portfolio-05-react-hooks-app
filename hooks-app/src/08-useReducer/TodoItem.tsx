import { TodoItemInterface } from "../interfaces/08-useReducer/TodoApp";

export const TodoItem = (
    { 
        todo, 
        onDeleteTodo,
        onToggleTodo 
    } : TodoItemInterface) => {

    return (
        <>
            <span 
                id="todo-item-description"
                className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}
                onDoubleClick={() => onToggleTodo(todo.id)}
                >{todo.description}</span>
            <button
                id="todo-item-delete-button"
                className="btn btn-danger"
                type="button"
                onClick={() => onDeleteTodo(todo.id)}
                >Delete
            </button>
        </>
    );
}