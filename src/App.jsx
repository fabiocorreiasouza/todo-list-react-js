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
        const filtredItems = this.state.items.filter(item => item.id != idTask);
        this.setState({ items : filtredItems });
    }

    render() {
        // Maps states data of this class and formats them to component calls.        
        const formatedTasks = this.state.items.map(item => (
            <Todo taskName={item.taskName} id={item.id} deleteTask={this.deleteTask} />
        ));

        return (
            <div className="App">
                <header className="header">
                    <h1>todo</h1>
                </header>

                <div className="box">
                    <Form addNewTask={this.addNewTaskName} />
                    
                    <ul className="list">
                        {formatedTasks}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;