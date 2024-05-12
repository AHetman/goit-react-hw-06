import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ validation, initialContact, onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    const nextContact = {
      ...values,
      id: nanoid(),
    };
    onAdd(nextContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="name"
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.formItem}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={phoneFieldId}
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
