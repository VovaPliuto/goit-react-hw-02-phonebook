import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact = newContact => {
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  onContactDelete = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div className={css.contactSection}>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.onAddContact}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          onFilterChange={this.handleFilterChange}
          filterValue={this.state.filter}
        />
        <ContactList data={this.state} onContactDelete={this.onContactDelete} />
      </div>
    );
  }
}
