import Navbar           from './components/Navbar'
import Hero             from './components/sections/Hero'
import About            from './components/sections/About'
import Skills           from './components/sections/Skills'
import Projects         from './components/sections/Projects'
import Education        from './components/sections/Education'
import Certifications   from './components/sections/Certifications'
import Contact          from './components/sections/Contact'
import Footer           from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
