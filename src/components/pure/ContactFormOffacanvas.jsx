import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ContactForm from './Forms/ContactForm';

const ContactFormOffcanvas = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(!show)

    return (
        <>
            <button className="bttn ms-2" onClick={handleShow}>
                Let&apos;s Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
            </button>
  
            <Offcanvas show={show} onHide={ handleShow } placement='end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact with me</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ContactForm/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ContactFormOffcanvas;
