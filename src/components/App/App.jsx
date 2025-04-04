import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchBox />
      {contacts.length > 0 && !isError && <ContactList />}
    </div>
  );
};

export default App;
