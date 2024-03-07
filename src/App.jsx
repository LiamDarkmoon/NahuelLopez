import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/pure/NavBar'
import LandingPage from './views/landing/LandingPage'
import AboutPage from './views/about/AboutPage';
import ErrorPage from './views/404/ErrorPage';
import FooterNav from './components/pure/FooterNav';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route  exact path='/' element={ <LandingPage/> }/>
        <Route path='/About' element={ <AboutPage/> } />
        <Route path='*' element={ <ErrorPage/> } />
      </Routes>
      <FooterNav/>
    </>
  )
}

export default App
