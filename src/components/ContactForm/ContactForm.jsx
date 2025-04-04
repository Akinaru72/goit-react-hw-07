import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `The "Name" is too short!`)
    .max(50, `The "Name" is too long!`)
    .required('The "Name" is required field!'),
  number: Yup.string()
    .min(3, `The "Number" is too short!`)
    .max(50, `The "Number" is too long!`)
    .required('The "Number" is required field!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    // const newContact = { ...values};
    console.log("handleSubmit", values);

    // const addContactAction = addContact(newContact);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.list}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.formInput}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor={nameFieldId}>
          Number
        </label>
        <Field
          className={css.formInput}
          type="tel"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
