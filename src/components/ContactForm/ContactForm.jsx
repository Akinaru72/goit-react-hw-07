import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('The "Name" is required field!')
    .min(3, `The "Name" is too short!`)
    .max(50, `The "Name" is too long!`),
  number: Yup.string()
    .required('The "Number" is required field!')
    .min(3, `The "Number" is too short!`)
    .max(50, `The "Number" is too long!`),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
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
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field
          id="name"
          className={css.input}
          type="text"
          name="name"
          autoComplete="name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field
          id="number"
          className={css.input}
          type="tel"
          name="number"
          autoComplete="tel"
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
