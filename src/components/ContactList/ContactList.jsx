import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact {...contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
