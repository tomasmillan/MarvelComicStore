import './App.css'
import NavbarContainer from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Marvel from './components/MarvelCards/api';

function App() {

  return (
    <>
      <NavbarContainer />
      <Hero />
      <Marvel />
    </>



  )
}

export default App
