import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import * as UseTodo from '../../src/hooks/useTodo';

describe('TodoApp', () => {

    const spy = jest.spyOn(UseTodo, 'useTodo');

    spy.mockReturnValue({
        todos: [
            { id: 1, description: 'Learn React', done: false },
            { id: 2, description: 'Learn Mongo', done: false },
        ],
        todosCount: 2,
        pendingTodosCount: 2,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
    });


    test ('should match with snapshot', () => {
        const { container } = render(<TodoApp />);
        expect(container).toMatchSnapshot();
    });

    test ('should show 2 todos', () => {
        const { container } = render(<TodoApp />);
        expect(screen.getByText('Learn React')).toBeTruthy();
        expect(screen.getByText('Learn Mongo')).toBeTruthy();
    });

    test ('should call add a todo', () => {
        const { container } = render(<TodoApp />);
        const input = container.querySelector('#todo-add-input') as HTMLInputElement;
        const form = container.querySelector('#todo-add-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: 'Learn Redux' } });
        fireEvent.submit(form);
        expect(spy).toHaveBeenCalled();
    });
});
