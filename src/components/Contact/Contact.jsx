import css from "./Contact.module.css";
import { TbPhoneFilled } from "react-icons/tb";
import { TbUserFilled } from "react-icons/tb";

const Contact = ({ id, name, number, onDelete }) => {
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
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
