import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addContact } from "../../redux/operations";
import css from "./ContactForm.module.css";
import { getContacts } from "../../redux/selector";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const onSubmit = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

        return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <label className={css.form__label}>
              Name
              <input
              className={css.form__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              {...register('name')}
              /> 
            </label>
            <label className={css.form__label}>
            Number
            <input
              className={css.form__input} 
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              {...register('number')}
              />
            </label>
            <button type="submit" className={css.form__button}>Add contact</button>
          </form>
          );
    }