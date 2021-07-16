import React from 'react';

// This class render list items where it be call.
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.taskName}
            </li>
        );
    }
}

export default Todo;