import { TodoList, TodoAdd } from './';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount,
        handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();
    
    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendings: </small>{pendingTodosCount}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>Todos</h4>
                    <hr />
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onToggleTodo={handleToggleTodo}
                        />
                </div>
                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    ); 
}