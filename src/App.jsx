import About from "./components/About";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Contact1 from "./components/contact1";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero1 />
      <About />
      <Features />
      <Story />
      <Contact1 />
      <Footer />
    </main>
  );
}

export default App;
