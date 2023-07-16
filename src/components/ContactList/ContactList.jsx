import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { deleteContact } from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selector';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <li className={css.contact__item} key={contact.id}>
          <span className={css.contact__text}>{contact.name}:</span> 
          <span className={css.contact__text}>{contact.number}</span>
          <button
            className={css.contact__button}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
