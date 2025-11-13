import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Features from "./components/About";
import Specials from "./components/specials";
import Menu from "./components/Menu";
import Contato from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Specials />
      <Menu />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
