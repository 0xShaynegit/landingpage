import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Features from './components/Features'
import Works from './components/Works'
import Manifesto from './components/Manifesto'
import Community from './components/Community'
import Join from './components/Join'
import './index.css'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <Stats />
      <Features />
      <Works />
      <Manifesto />
      <Community />
      <Join />
    </main>
  )
}
