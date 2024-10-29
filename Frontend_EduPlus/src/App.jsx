import './App.css'
import { Navbar } from './Pages/HomePage/navbar.jsx'
import { Hero } from './Pages/HomePage/hero.jsx'
import FeaturesSection  from './Pages/HomePage/featuresection.jsx'
import Footer from './Pages/HomePage/footer.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <br />
    <h1 className='feature-heading'>OUR FEATURES</h1>
    <br />
    <FeaturesSection/>
    <br />
    <Footer/>
    </>
  )
}

export default App
