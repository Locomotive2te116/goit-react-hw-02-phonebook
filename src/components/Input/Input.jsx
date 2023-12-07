import React from 'react';
import { nanoid } from 'nanoid';

export class Input extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleValueChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  createContact = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = { name, number, id: nanoid(5) };

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }
    if (this.props.contacts.some(contact => contact.number === number)) {
      alert(`Contact with the number ${number} already exists!`);
      return;
    }

    this.props.updateContactState(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.createContact}>
        <label>
          Name <br />
          <input
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Enter contact name"
            onChange={event => this.handleValueChange('name', event)}
          />
        </label>

        <label>
          Number <br />
          <input
            name="number"
            value={this.state.number}
            type="tel"
            placeholder="Enter contact number"
            onChange={event => this.handleValueChange('number', event)}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
