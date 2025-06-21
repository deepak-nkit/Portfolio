import Navbar from "./components/navbar";
import Projects from "./components/project";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SocialLinks from "./components/socialLinks";

function App() {
  return (
    <div className="flex bg-gray-800 text-white min-h-screen font-sans">
      <Navbar />
      <SocialLinks />
      <main className="grid bg-gray-800 gap-16">
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
