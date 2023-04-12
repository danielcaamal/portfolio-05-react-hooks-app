import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { TodoInterface } from "../interfaces/08-useReducer/TodoApp";

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo:TodoInterface) => void }) => {

    const initialTodo = {
        id: 0,
        description: '',
        done: false
    }
    const { formState, onInputChange, onResetForm } = useForm(initialTodo)
    const { description } = formState;

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            ...initialTodo,
            id: new Date().getTime(),
            description,
        };

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form
                id="todo-add-form" 
                onSubmit={(e) => onSubmit(e)}>
                <input
                    id="todo-add-input"
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Learn..."
                    autoComplete="off"
                    onChange={onInputChange}
                    value={description}
                />
                <button
                    id="todo-add-button"
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                    >Add
                </button>
            </form>
        </>
    );
}