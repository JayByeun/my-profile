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
      <div className="flex justify-center items-center p-10">
        <span> Copyright @2025 All rights reserved by Jay Byeun</span>
      </div>
    </div>
  );
};

export default App;
