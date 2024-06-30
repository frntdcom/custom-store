import {TodoListFacade} from "./store-todo-list/todo-list.facade";

const todoFacade = new TodoListFacade();
const randomId = Date.now();

todoFacade.addTodo({
    id: randomId,
    text: 'Learn JavaScript',
    completed: false
});

todoFacade.toggleTodo(randomId);
todoFacade.removeTodo(randomId);

console.log(todoFacade.getState());
