import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ contacts, onDeleteContact }) {
  return contacts.map(({ name, number, id }) => (
    <li key={id} className={s.item}>
      {name} : <span className={s.item}>{number}</span>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
}

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
