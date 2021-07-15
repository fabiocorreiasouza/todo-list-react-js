import React from 'react';

/** 
 * This is the form component.
 * His purpose is to render the elements of the form and send state data for 
 * a parent component.
 */
class Form extends React.Component {
    constructor() {
        super();
        this.state = {taskName : null};
    }

    // Attaches the value from input field to state, when happen a change event.
    handleChange = (event) => {
        this.setState( {taskName : event.target.value} );
    }

    // When happen a form submit event, this function sends state data to a parent, by callback props.
    handleSubmit = (event) => {
        event.preventDefault();
        // <callback props here>
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type="text" 
                    className="input-text"
                    onChange={this.handleChange}
                    value={this.state.taskName}
                />

                <button className="btn" type="submit" >
                    Hi, i am button
                </button>

            </form>
        );
    }
}

export default Form;