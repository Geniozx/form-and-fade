import Navbar from "./components/Navbar";
import StickyBookingCTA from "./components/StickyBookingCTA";

import Hero from "./sections/Hero";
import QuickLinks from "./sections/QuickLinks";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QuickLinks />
        <Services />
        <Gallery />
        <About />
        <FinalCTA />
      </main>

      <Footer />
      <StickyBookingCTA />
    </>
  );
}

export default App;
