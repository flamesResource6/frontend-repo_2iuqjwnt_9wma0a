import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Specs from './components/Specs'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* SEO basics for SPA */}
      <div className="sr-only">
        <h1>The Zero Group | Toshiba Photocopier NeoPrint X Launch</h1>
        <p>Discover the futuristic Toshiba photocopier NeoPrint X: ultra-fast duplex printing, AI color calibration, and enterprise security. Presented by The Zero Group.</p>
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <CTA />
      <Footer />
    </div>
  )
}

export default App