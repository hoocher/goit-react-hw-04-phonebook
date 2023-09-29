import { useState } from 'react';
import { InputDiv } from './ContactForm.styled';

const ContactForm = ({ addContacts }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const inputChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setContactName(value);
    }
    if (name === 'number') {
      setContactNumber(value);
    }
  };

  return (
    <form
      onSubmit={() => {
        addContacts(contactName, contactNumber);
      }}
    >
      <InputDiv>
        <span>Name </span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
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
          value={contactNumber}
          onChange={inputChange}
        />
      </InputDiv>

      <button type="submit">Add contacts</button>
    </form>
  );
};

export default ContactForm;
