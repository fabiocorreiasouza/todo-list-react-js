import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

// This is main component of the application, which calls all others.
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <Form />
                         
            </div>
        );
    }
}

export default App;