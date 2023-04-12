import { renderHook, act } from '@testing-library/react-hooks';
import { useTodo } from '../../src/hooks/useTodo';


describe('useTodo', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useTodo());
        const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = result.current;
        expect(todos).toEqual([]);
        expect(todosCount).toBe(0);
        expect(pendingTodosCount).toBe(0);
        expect(typeof handleNewTodo).toBe('function');
        expect(typeof handleDeleteTodo).toBe('function');
        expect(typeof handleToggleTodo).toBe('function');
    });

    test('should add a new todo', () => {
        const { result } = renderHook(() => useTodo());
        const { handleNewTodo } = result.current;
        act(() => {
            handleNewTodo({
                id: 1,
                description: 'Learn React',
                done: false
            });
        });
        expect(result.current.todos).toEqual([{
            id: 1,
            description: 'Learn React',
            done: false
        }]);
    });

    test('should delete a todo', () => {
        const { result } = renderHook(() => useTodo());
        const { handleNewTodo, handleDeleteTodo } = result.current;
        act(() => {
            handleNewTodo({
                id: 1,
                description: 'Learn React',
                done: false
            });
            handleDeleteTodo(1);
        });
        expect(result.current.todos).toEqual([]);
    });

    test('should toggle a todo', () => {
        const { result } = renderHook(() => useTodo());
        const { handleNewTodo, handleToggleTodo } = result.current;
        act(() => {
            handleNewTodo({
                id: 1,
                description: 'Learn React',
                done: false
            });
            handleToggleTodo(1);
        });
    });
});