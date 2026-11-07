import Navbar from "./components/Navbar";
import StickyBookingCTA from "./components/StickyBookingCTA";

import Hero from "./sections/Hero";
import QuickLinks from "./sections/QuickLinks";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QuickLinks />
      </main>

      <StickyBookingCTA />
    </>
  );
}

export default App;
