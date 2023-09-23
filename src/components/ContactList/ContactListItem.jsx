import { LiItem } from './ContactList.styled';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <LiItem>
      <span>{name}: </span>
      <span> {number} </span>
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </LiItem>
  );
};

export default ContactListItem;
