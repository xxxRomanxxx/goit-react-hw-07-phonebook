import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import { deleteContact } from '../../redux/contactsSlice';
import { getVisibleContacts } from '../../redux/selector';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  
  return (visibleContacts.map(contact => {
    return (<ul className={css.contact__list}>
      <li key={contact.id} className={css.contact__item}>
        <span className={css.contact__text}>{contact.name}:</span>
        <span className={css.contact__text}>{contact.number}</span>
        <button 
        type="button" 
        onClick={() => dispatch(deleteContact(contact.id))} 
        className={css.contact__button}
        >
        Delete
        </button>
      </li>
      </ul>)
  }))
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ContactList;

