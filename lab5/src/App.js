import {load, getTasks, sendTasks, deleteTask, updateTask} from "./scripts.js";


new Vue({
    el: "#page",
    data: {
        inputValue: "",
        todos: []
    },
    methods: {
        async createTodo() {
            this.todos = await sendTasks(this.inputValue);
            this.inputValue = "";
        },
        async refreshTodos() {this.todos = await getTasks()},
        async updateTodo(todo) {this.todos = await updateTask(todo.id, todo.name)},
        async deleteTodo(todo) {this.todos = await deleteTask(todo.id)}
    },
    beforeCreate() {load()}
})