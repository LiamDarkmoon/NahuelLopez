import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup";

const ContactForm = () => {

    let initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const contactSchema = yup.object({
        firstName: yup.string()
            .min(2, 'too short')
            .max(20, 'too long')
            .required('enter your name'),
        lastName: yup.string()
            .min(2, 'too short')
            .max(20, 'too long')
            .required('enter your lastname'),
        email: yup.string().email('Invalid email').required('Required'),
        message: yup.string().required('please enter a message')
    })

    let newValues = {}

    const handleValues = (values) => {
        newValues = values
        values.message !== '' ? alert(JSON.stringify(values.message)) : alert('please, enter a message')
    } 

    return (
        <Formik
        initialValues={ initialValues }
        validationSchema={ contactSchema }
        onSubmit={ handleValues }
        >
            {({ errors, touched, isSubmitting }) =>(

            <Form className='d-flex flex-wrap justify-content-center'>
            <div className='col-6 mb-2'>
                <label htmlFor="firstName"> First Name </label>
                <Field className="form-control focus-ring focus-ring-danger" id="firstName" name="firstName" placeholder="Jane" />
                <ErrorMessage component='div' className='error-message text-center' name='firstName'/>
            </div>

            <div className='col-6 mb-2'>
                <label htmlFor="lastName"> Last Name </label>
                <Field className="form-control" id="lastName" name="lastName" placeholder="Doe" />
                <ErrorMessage component='div' className='error-message text-center' name='lastName'/>
            </div>

            <div className='mb-2 w-100'>
                <label htmlFor="email"> Email </label>
                <Field className="form-control" id="email" name="email" placeholder="your@email.com" type="email" />
                <ErrorMessage component='div' className='error-message text-center' name='email'/>
            </div>


            <div className='mb-2 w-100'>
                <label htmlFor="message"> Last Name </label>
                <Field className="form-control" id="message" name="message" as="textarea" placeholder="Hey, whats up im contacting you..." />
                <ErrorMessage component='div' className='error-message text-center' name='message'/>
            </div>
            
            <div className='d-flex flex-column justify-content-center'>
                <button className='bttn mt-2' type="submit"> Submit </button>
                { isSubmitting ? <div className='success-message'> Sending, thanks for contacting </div> : null }
            </div>
            </Form>            
        )}
        </Formik>
    );
}

export default ContactForm;
