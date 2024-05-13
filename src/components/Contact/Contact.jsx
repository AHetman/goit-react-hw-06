import css from "./Contact.module.css";
import { TbPhoneFilled } from "react-icons/tb";
import { TbUserFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact}>
      <div className={css.dataContact}>
        <p className={css.text}>
          <TbUserFilled />
          {name}
        </p>

        <p className={css.text}>
          <TbPhoneFilled />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
