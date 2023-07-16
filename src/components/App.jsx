import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Loader from "./Loader/Loader";
import css from "./App.module.css";
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from '../redux/selector';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <h2 className={css.title__list}>Contacts</h2>
      <Filter />
      {error && <p>{error}</p>}
      <ContactList/>
      {isLoading && <Loader />}
    </div>
  )

}