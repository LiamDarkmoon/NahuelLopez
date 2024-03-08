import { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef(null)

    let initialValues = {
        name: '',
        lastname: '',
        email: '',
        message: ''
    }

    const contactSchema = yup.object({
        name: yup.string()
            .min(2, 'too short')
            .max(20, 'too long')
            .required('enter your name'),
        lastname: yup.string()
            .min(2, 'too short')
            .max(20, 'too long')
            .required('enter your lastname'),
        email: yup.string().email('Invalid email').required('Required'),
        message: yup.string().required('please enter a message')
    })

    const sendEmail = async (e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
    
        emailjs
          .sendForm('service_91yg00k', 'contact_form', form.current, {
            publicKey: 'VQ6qlFCwlhqTcTMgc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

          emailjs
          .sendForm('service_91yg00k', 'contact_Reply', form.current, {
            publicKey: 'VQ6qlFCwlhqTcTMgc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <Formik 
        initialValues={ initialValues }
        validationSchema={ contactSchema }
        onSubmit={ sendEmail }
        >
            {({ errors, touched, isSubmitting }) =>(

            <Form ref={ form } className='d-flex flex-wrap justify-content-center'>
                <div className='col-6 mb-2'>
                    <label htmlFor="name"> First Name </label>
                    <Field className="form-control focus-ring focus-ring-danger" id="name" name="name" placeholder="Jane" />
                    <ErrorMessage component='div' className='error-message text-center' name='name'/>
                </div>

                <div className='col-6 mb-2'>
                    <label htmlFor="lastname"> Last Name </label>
                    <Field className="form-control" id="lastName" name="lastname" placeholder="Doe" />
                    <ErrorMessage component='div' className='error-message text-center' name='lastname'/>
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
