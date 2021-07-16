import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

// This is main component of the application, which calls all others.
class App extends React.Component {
    constructor() {
        super();
        this.state = { taskNames : [] };
    }
    
    // Receives by argument the task name from Form imput and sets state of this class with it.
    addNewTaskName = (newTask) => {
        const atualTasks = this.state.taskNames;
        this.setState({ taskNames : [...atualTasks, newTask] });
    }

    render() {
        // Maps states data of this class and formats them to component calls.        
        const formatedTasks = this.state.taskNames.map( task => (
            <Todo taskName={task} />
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