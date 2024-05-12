import { useState, useEffect } from "react";
import * as Yup from "yup";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

const initialContact = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const App = () => {
  const contactsUsers = JSON.parse(localStorage.getItem("contacts")) || [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(contactsUsers);
  const [filter, setFilter] = useState("");

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContacts = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm
        initialContact={initialContact}
        validation={FeedbackSchema}
        onAdd={addContacts}
      />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchContacts} onDelete={deleteContacts} />
    </div>
  );
};

export default App;
