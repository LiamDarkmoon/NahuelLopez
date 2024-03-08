import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ContactFormOffcanvas from './ContactFormOffacanvas';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar className="Navbar" fixed='top' >
                <Link className='Navbar-logo tf' to="/"> Nahuel Lopez </Link>
                <Nav className="ms-auto">
                    <Link className='Navbar-link my-auto me-3 me-sm-0' to="/About">About</Link>
                    <ContactFormOffcanvas/>
                </Nav>
        </Navbar>
    );
}

export default NavBar;
