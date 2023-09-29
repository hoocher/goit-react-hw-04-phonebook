import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { ContainerDiv } from './App.styled';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

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

  const addContact = (contactName, contactNumber) => {
    const alredyHas = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );
    if (alredyHas) {
      return alert(`${contactName} is alredy in contacts`);
    }

    const cont = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };

    const newContacts = [...contacts, cont];
    setContacts(newContacts);
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <ContainerDiv>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredName()} onClick={deleteContact} />
    </ContainerDiv>
  );
};

export default App;
