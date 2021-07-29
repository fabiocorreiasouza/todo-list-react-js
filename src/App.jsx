import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

// This is main component of the application, which calls all others.
class App extends React.Component {
    constructor() {
        super();
        this.state = { items : [] };
    }
    // This function attaches id to tasks
    getId = () => {
        this.id = -1;
        if (this.state.items) {
            this.state.items.map( item => { this.id = item.id });
        }
        this.id++;
        return this.id;
    }
    
    // Receives by argument the task name from Form imput and sets state of this class with it.
    addNewTaskName = (newTask) => {
        const atualItems = this.state.items;
        const newItem = { id : this.getId(), taskName : newTask };
        this.setState({ items : [...atualItems, newItem] });
    }

    // Delete a task when happen a onclick event.
    deleteTask = (idTask) => {
        let respost = window.confirm("Want you delete this task?");
        alert(respost);
        if(respost) {
            const filtredItems = this.state.items.filter(item => item.id != idTask);
            this.setState({ items : filtredItems });
        }
        //alert(respost);
    }

    render() {
        // Maps states data of this class and formats them to component calls.        
        const formatedTasks = this.state.items.map(item => (
            <Todo taskName={item.taskName} id={item.id} deleteTask={this.deleteTask} />
        ));

        return (
            <div className="App">
                <h1>Todo List</h1>
                <Form addNewTask={this.addNewTaskName} />
                
                <ul>
                    {formatedTasks}
                </ul> 
            </div>
        );
    }
}

export default App;