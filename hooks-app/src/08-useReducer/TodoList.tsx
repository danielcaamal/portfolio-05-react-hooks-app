import { TodoListInterface } from '../interfaces/08-useReducer/TodoApp';
import { TodoItem } from './TodoItem';

export const TodoList = (
    {
        todos = [], 
        onDeleteTodo,
        onToggleTodo
    } : TodoListInterface) => {

    return (
        <>
            <ul className="list-group">
                {todos.map((todo, i) => {
                    return (
                        <li 
                            className="list-group-item d-flex justify-content-between" 
                            key={ todo.id }>
                            <TodoItem 
                                todo={todo} 
                                onDeleteTodo={onDeleteTodo}
                                onToggleTodo={onToggleTodo}
                                />
                        </li>
                    )
                })}
            </ul>
        </>
    );
}