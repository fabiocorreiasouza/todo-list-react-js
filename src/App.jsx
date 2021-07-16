import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

// This is main component of the application, which calls all others.
class App extends React.Component {
    constructor() {
        super();
        this.state = { taskNames : undefined };
    }
    
    // Receives by argument the task name from Form imput and sets state of this class with it.
    addNewTaskName = (newTask) => {
        const atualTasks = this.state.taskNames;
        this.setState({ taskNames : [...atualTasks, newTask] });
    }

    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <Form addNewTask={this.addNewTaskName} />
                         
            </div>
        );
    }
}

export default App;