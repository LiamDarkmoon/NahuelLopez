import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css'
import NavBar from './components/pure/NavBar'
import LandingPage from './views/landing/LandingPage'

function App() {

  return (
    <>
      <NavBar/>
      <LandingPage/>
    </>
  )
}

export default App
