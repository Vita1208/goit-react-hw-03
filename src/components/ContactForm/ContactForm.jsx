import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from './ContactForm.module.css'

const addContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short")
        .max(50, "Too long")
        .required("Required"),
    number: Yup.string()
        .required("Required"),
});

export default function ContactForm({ onAdd }) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const initValues = { name: "", number: "" };

    const handleSubmit = (contact, actions) => {
        onAdd({ ...contact, id: nanoid() });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={addContactSchema}
        >
            <Form className={css.form}>
                <div className={css.div}>
                    <label className={css.label} htmlFor={nameFieldId}>Name</label>
                    <Field id={nameFieldId} name="name" type="text" />
                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field id={numberFieldId} name="number" type="text" />
                    <ErrorMessage name="number" component="span" className={css.span} />
                </div>
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}



