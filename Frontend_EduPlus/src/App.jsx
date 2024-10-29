import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import FeaturesSection  from './components/featuresection.jsx'
import Footer from './components/footer.jsx'
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
