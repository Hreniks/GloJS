
'use strict';

class Todo {

    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }

    

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem,this);
        this.addToStorage();
    }

    addToStorage(){
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }

    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.dataset.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`);

        if (todo.completed){
            this.todoCompleted.append(li);
        }
        else {
            this.todoList.append(li);
        }

    }

    addToDo(e) {
        e.preventDefault();

       
        while (this.input.value === ''){
            alert('Введите дело!');
            return;
        }

        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };

            this.todoData.set(newTodo.key, newTodo);
            this.render();
        }

    }

    init() {
        this.form.addEventListener('submit', this.addToDo.bind(this));
        this.handler();
        this.render();
    }


    generateKey() {
        return Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substring(2, 15);
    }


    deleteItem(target){
        //найти по ключу элемент и удалить из new map => render
        const todoLi = target.closest('.todo-item');
        this.todoData.delete(todoLi.dataset.key);
        todoLi.remove();
        this.render();
    }

    completedItem(target){
        
        const todoLi = target.closest('.todo-item');
        const thisItem = this.todoData.get(todoLi.dataset.key);
        thisItem.completed = !thisItem.completed;
        this.render();
    }

    handler(){
        //делегирование
        const todoContainer = document.querySelector('.todo-container');

        todoContainer.addEventListener('click', (e) => {
            let target = e.target;

            if (target.matches('.todo-remove')) {
                this.deleteItem(target);
            } else if (target.matches('.todo-complete')) {
                this.completedItem(target);
            } else if (target.matches('.todo-edit')) {
                this.editItem(target);
            }
        });
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();