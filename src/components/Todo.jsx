import React from 'react';

// This class render list items where it be call.
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        // Sends callback props to App component
        this.props.deleteTask(event.target.id);
    }

    render() {
        return (
            <li  id={this.props.id} onClick={this.handleClick}>
                {this.props.taskName}
            </li>
        );
    }
}

export default Todo;