import {Action, Reducer} from "../store/store";

export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: TodoItem[];
}

export const initialState: TodoState = {
    todos: [],
};

export enum TodoActionTypes {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO
}

export const addTodoAction = (todoItem: TodoItem): Action => ({
    type: TodoActionTypes.ADD_TODO,
    payload: todoItem
});

export const toggleTodoAction = (id: number): Action => ({
    type: TodoActionTypes.TOGGLE_TODO,
    payload: {id}
});

export const removeTodoAction = (id: number): Action => ({
    type: TodoActionTypes.REMOVE_TODO,
    payload: {id}
});

export const todoReducer: Reducer<TodoState> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload ],
            }

        case TodoActionTypes.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
                )
            };

        case TodoActionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };

        default:
            return state;
    }
};
