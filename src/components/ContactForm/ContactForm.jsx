import { useState } from 'react';
import { InputDiv } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const ContactForm = ({ contacts, setContacts }) => {
  const [ContactName, setContactName] = useState('');
  const [ContactNumber, setContactNumber] = useState('');

  const inputChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setContactName(value);
    }
    if (name === 'number') {
      setContactNumber(value);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    const alredyHas = contacts.find(
      contact => contact.name.toLowerCase() === ContactName.toLowerCase()
    );
    if (alredyHas) {
      return alert(`${ContactName} is alredy in contacts`);
    }

    const cont = {
      id: nanoid(),
      name: ContactName,
      number: ContactNumber,
    };

    const newContacts = [...contacts, cont];
    setContacts(newContacts);
    setContactName('');
    setContactNumber('');
  };

  return (
    <form onSubmit={submitForm}>
      <InputDiv>
        <span>Name </span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={ContactName}
          onChange={inputChange}
        />
      </InputDiv>
      <InputDiv>
        <span>Number </span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          value={ContactNumber}
          onChange={inputChange}
        />
      </InputDiv>

      <button type="submit">Add contacts</button>
    </form>
  );
};

export default ContactForm;
