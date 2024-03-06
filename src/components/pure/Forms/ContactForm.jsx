import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup";

const ContactForm = () => {

    let initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    let newValues = {}

    const handleValues = (values) => {
        newValues = values
        alert(JSON.stringify(values))
        console.log(newValues)
    } 

    return (
        <Formik
        initialValues={ initialValues }
        onSubmit={ handleValues }
        >
            <Form className='d-flex flex-wrap'>
            <div className='col-6'>
                <label htmlFor="firstName"> First Name </label>
                <Field className="form-control" id="firstName" name="firstName" placeholder="Jane" />
            </div>

            <div className='col-6'>
                <label htmlFor="lastName"> Last Name </label>
                <Field className="form-control" id="lastName" name="lastName" placeholder="Doe" />
            </div>

            <label htmlFor="email"> Email </label>
            <Field className="form-control" id="email" name="email" placeholder="your@email.com" type="email" />

            <label htmlFor="message"> Last Name </label>
            <Field className="form-control" id="message" name="message" as="textarea" placeholder="Hey, whats up im contacting you..." />

            <button type="submit"> Submit </button>
            </Form>            
        </Formik>
    );
}

export default ContactForm;
