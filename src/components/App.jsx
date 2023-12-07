import React from 'react';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredData = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return this.state.contacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <h2>Contacts</h2>
        <ContactsList
          contacts={this.state.contacts}
          getFilteredData={this.getFilteredData}
          deleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}
