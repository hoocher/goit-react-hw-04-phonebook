import { useContext } from 'react';
import { PhonebookContext } from 'components/App';

const Filter = () => {
  const { filter, setFilter } = useContext(PhonebookContext);

  const setFilterValue = ({ target: { name, value } }) => {
    if (name === 'filter') {
      setFilter(value);
    }
  };

  return (
    <>
      <span> Find contacts by name: </span>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={setFilterValue}
      />
    </>
  );
};
export default Filter;
