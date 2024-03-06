import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ContactFormOffcanvas from './ContactFormOffacanvas';


const NavBar = () => {
    return (
        <Navbar className="Navbar" fixed='top' >
                <Navbar.Brand className='Navbar-logo tf' href="#home"> Nahuel Lopez </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <ContactFormOffcanvas/>
                </Nav>
        </Navbar>
    );
}

export default NavBar;
