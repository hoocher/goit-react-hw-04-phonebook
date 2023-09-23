import { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
