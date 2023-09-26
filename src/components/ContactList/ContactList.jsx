import ContactListItem from './ContactListItem';

import React from 'react';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ContactList;
