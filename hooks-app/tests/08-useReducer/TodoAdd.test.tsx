import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TodoAdd } from '../../src/08-useReducer/TodoAdd';

describe('TodoAdd', () => {

    const onNewTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should match with snapshot', () => {
        const { container } = render(<TodoAdd onNewTodo={onNewTodo} />);
        expect(container).toMatchSnapshot();
    });

    test('should not call onNewTodo', () => {
        const { container } = render(<TodoAdd onNewTodo={onNewTodo} />);
        const form = container.querySelector('#todo-add-form') as HTMLFormElement;
        fireEvent.submit(form);
        expect(onNewTodo).not.toHaveBeenCalled();
    });

    test('should call onNewTodo', () => {
        const { container } = render(<TodoAdd onNewTodo={onNewTodo} />);
        const input = container.querySelector('#todo-add-input') as HTMLInputElement;
        const form = container.querySelector('#todo-add-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: 'Learn React' } });
        fireEvent.submit(form);
        expect(onNewTodo).toHaveBeenCalledTimes(1);
    });

    test('should call onNewTodo and reset form', () => {
        const { container } = render(<TodoAdd onNewTodo={onNewTodo} />);
        const input = container.querySelector('#todo-add-input') as HTMLInputElement;
        const form = container.querySelector('#todo-add-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: 'Learn React' } });
        fireEvent.submit(form);
        expect(onNewTodo).toHaveBeenCalledTimes(1);
        expect(input.value).toBe('');
    });
});