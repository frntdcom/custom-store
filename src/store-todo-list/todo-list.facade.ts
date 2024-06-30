import {
    TodoState,
    todoReducer,
    addTodoAction,
    toggleTodoAction,
    removeTodoAction,
    initialState, TodoItem
} from "./todo-list.store";
import {Store} from "../store/store";

export class TodoListFacade {
    #store: Store<TodoState>;

    constructor() {
        this.#store = new Store(todoReducer, initialState);
    }

    addTodo(todoItem: TodoItem): void {
        this.#store.dispatch(addTodoAction(todoItem));
    }

    toggleTodo(id: number): void {
        this.#store.dispatch(toggleTodoAction(id));
    }

    removeTodo(id: number): void {
        this.#store.dispatch(removeTodoAction(id));
    }

    getState() {
        return this.#store.getState();
    }
}
