import { todoReducer } from '../../src/08-useReducer/todoReducer';


describe('todoReducer', () => {
    const initialState = [
        {
            id: 1,
            description: 'Learn React',
            done: false
        }
    ];

    test ('should return the initial state', () => {
        const state = todoReducer(initialState, {} as any);
        expect(state).toBe(initialState);
    });

    test ('should add a todo', () => {
        const action = {
            type: 'add',
            payload: {
                id: 2,
                description: 'Learn Redux',
                done: false
            }
        }
        const state = todoReducer(initialState, action as any);
        expect(state.length).toBe(2);
        expect(state).toEqual([...initialState, action.payload]);
    });

    test ('should delete a todo', () => {
        const action = {
            type: 'delete',
            payload: {
                id: 1,
                description: 'Learn React',
                done: false
            }
        }
        const state = todoReducer(initialState, action as any);
        expect(state.length).toBe(0);
        expect(state).toEqual([]);
    });

    test ('should toggle a todo', () => {
        const action = {
            type: 'toggle',
            payload: {
                id: 1,
                description: 'Learn React',
                done: false
            }
        }
        const state = todoReducer(initialState, action as any);
        expect(state[0].done).toBe(true);
        expect(state).toEqual([
            {
                id: 1,
                description: 'Learn React',
                done: true
            }
        ]);
    });
});