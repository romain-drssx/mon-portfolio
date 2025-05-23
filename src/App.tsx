import { HashRouter } from 'react-router-dom';
import './App.css'

// @ts-ignore
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

function App() {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
