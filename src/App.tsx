import Navbar from "./components/nav/Navbar";
import Home from "./components/nav/Home";
import About from "./components/nav/About";
import Resume from "./components/nav/Resume";
import Contact from "./components/nav/Contact";

const App = () => {
  return (
    <div className="font-roboto-slab">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
