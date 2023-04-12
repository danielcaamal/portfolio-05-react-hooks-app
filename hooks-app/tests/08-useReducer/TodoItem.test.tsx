import React from 'react';
import { render } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('todoItem', () => {
    const todo = {
        id: 1,
        description: 'Learn React',
        done: false
    };

    const todoDone = {
        id: 2,
        description: 'Learn React',
        done: true
    }

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should match with snapshot', () => {
        const { container } = render(<TodoItem 
            todo={todo}  
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        expect(container).toMatchSnapshot();
    });


    test('should call onToggleTodo', () => {
        const { container } = render(<TodoItem 
            todo={todo}  
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const todoItem = container.querySelector('#todo-item-description') as HTMLSpanElement;
        todoItem.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
    });

    test('should call onDeleteTodo', () => {
        const { container } = render(<TodoItem 
            todo={todo}  
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const deleteButton = container.querySelector('#todo-item-delete-button') as HTMLButtonElement;
        deleteButton.click();
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
    });

    test('should be lined through in todo dones', () => {
        const { container } = render(<TodoItem 
            todo={todoDone}  
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const todoItem = container.querySelector('#todo-item-description') as HTMLSpanElement;
        expect(todoItem.className).toContain('text-decoration-line-through');
    });

    test('should not be lined through in todo not dones', () => {
        const { container } = render(<TodoItem 
            todo={todo}  
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const todoItem = container.querySelector('#todo-item-description') as HTMLSpanElement;
        expect(todoItem.className).not.toContain('text-decoration-line-through');
    });
});