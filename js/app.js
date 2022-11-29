/**
 * Take an Input
 * 
 * Handle submission of the input
 * 
 * Display task as list of items
 * 
 * Strike through completed task on the click
 * 
 * hide done BTN to remove completed task
 * 
 */

// Name
let myName = document.querySelector('.myName');
myName.innerText = 'Daily To Do List';

// Class Constructor Prototype
// ----------------------------------------------------------------
class ToDo {
    constructor() {
        // Gain Access to this array
        // ----------------------------------------------------------------
        this.todoArr = [];
        
        // Gain Access to these Elements
        // ----------------------------------------------------------------
        this.form = document.getElementById('form');
        this.todoItemInput = document.getElementById('todo');
        this.todoList = document.getElementById('todoList');
        this.button = document.getElementById('button');
        this.todoListItems = document.getElementsByTagName('li'); //return a node list
    }

    // INIT
    // ----------------------------------------------------------------
    init() {
        this.formSubmit();
    }

    // Methods Call the methods here
    // ----------------------------------------------------------------
    formSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log('click');
            this.addToDo();
            console.log(this.todoItemInput.value)
            this.completedTask();
            this.hideDone();
        })

    }

    // Add todo Method
    // ----------------------------------------------------------------
    addToDo() {
        let found = false;
        console.log('test')
        console.log(this.todoItemInput.value);

        this.todoArr.forEach(item => {
            if (item.toLowerCase() === this.todoItemInput.value.toLowerCase()){
                found = true;
            }
        });

        if(!found) {
            console.log(this.todoItemInput);
            this.todoList.innerHTML += `
            <li class="list-group-item">${this.todoItemInput.value}</li>
            `;
            this.todoArr.push(this.todoItemInput.value);
            this.todoItemInput.value = '';
        }
    }

    // Completed Task Method
    // ----------------------------------------------------------------
    completedTask() {
        for(let i= 0; i < this.todoListItems.length; i ++) {
            this.todoListItems[i].addEventListener('click', (e) => {
                e.target.style.textDecoration = 'line-through';
                e.target.classList.add('done')
            })
        }
    }

    // Hide Done Method
    // ----------------------------------------------------------------
    hideDone() {
        this.button.addEventListener('click', ()=> {
            for(let i = 0; i < this.todoListItems.length; i++) {
                if(this.todoListItems[i].classList.contains('done')){
                    this.todoListItems[i].style.display = 'none';
                }
            }
        });
    }


}


// Call Methods
let action = new ToDo();
// action.formSubmit();
action.init();
