import React, { Component } from 'react';
import './css/addproperty.css';
import axios from 'axios';

class AddProperty extends Component {
    state = {
      fields: {
        title: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        price: '',
        city: '',
        email: '',
      },
    };

    handleAddProperty = (event) => {
      event.preventDefault();



      axios.post('http://localhost:3000/api/v1/PropertyListing/', this.state.fields)
        .then(res => {
          console.log(res);
          console.log(res.data);
        });

      console.log(this.state.fields);
    };

    handleFieldChange = (event) => {
      this.setState({
        fields: {
          ...this.state.fields,
          [event.target.name]: event.target.value,
        },
      });
    };

    render() {
      return (
        <div className="AddProperty">
          <h1>Add Property Page</h1>
          <form onSubmit={this.handleAddProperty}>
            <input type="text" name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="Name of Property" />
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange} placeholder="Property Type">
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>

            <input type="number" name="bedrooms" placeholder="Number of Bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />

            <input type="number" name="bathrooms" placeholder="Number of Bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />

            <input type="number" name="price" placeholder="Price" value={this.state.fields.price} onChange={this.handleFieldChange} />

            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>

            <input type="email" name="email" placeholder="Email" value={this.state.fields.email} onChange={this.handleFieldChange} />

            <button type="submit">Add</button>
          </form>
        </div>
      );
    }
}

export default AddProperty;
