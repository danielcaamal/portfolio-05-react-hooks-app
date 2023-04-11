

export interface TodoInterface {
    id: number;
    description: string;
    done: boolean;
};

export interface TodoListInterface {
    todos: TodoInterface[];
    onDeleteTodo: (id:number) => void;
    onToggleTodo: (id:number) => void;
}

export interface TodoItemInterface {
    todo: TodoInterface;
    onDeleteTodo: (id:number) => void;
    onToggleTodo: (id:number) => void;
}
