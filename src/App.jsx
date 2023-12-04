import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Contact,
  // StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* <StarsCanvas /> */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Projects />
          <Experience />
          <div className="relative z-0">
            <Contact />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
