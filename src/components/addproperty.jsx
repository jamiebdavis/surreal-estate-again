import React, { Component } from 'react';

class AddProperty extends Component {
    state = {
      fields: {
        title: '',
      },
    };

    handleAddProperty = (event) => {
      event.preventDefault();
      console.log(this.state.fields);
    };

    render() {
      return (
        <div className="AddProperty">
              Add Property Page
          <form onSubmit={this.handleAddProperty}>
            <input type="text" name="title" value="this.state.fields.title" onChange={this.handleFieldChange} />
            <button type="submit">Add</button>
          </form>
        </div>
      );
    };
};

export default AddProperty;
