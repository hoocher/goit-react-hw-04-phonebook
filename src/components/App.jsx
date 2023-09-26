import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { ContainerDiv } from './App.styled';
import { createContext, useEffect, useState } from 'react';

export const PhonebookContext = createContext();

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    if (!contacts.length) {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  const filteredName = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <PhonebookContext.Provider value={{ filter, setFilter }}>
      <ContainerDiv>
        <h1>Phonebook</h1>
        <ContactForm setContacts={setContacts} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={filteredName()} onClick={deleteContact} />
      </ContainerDiv>
    </PhonebookContext.Provider>
  );
};

export default App;
