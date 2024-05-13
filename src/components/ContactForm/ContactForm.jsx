import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const Feedback = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contactName = name.trim();
    dispatch(addContact(contactName, number));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Feedback}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameId}
            placeholder="name"
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.formItem}>
          <label htmlFor={phoneId}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={phoneId}
            placeholder="number"
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
