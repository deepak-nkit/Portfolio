import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Projects from "./components/project";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SocialLinks from "./components/socialLinks";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <div className=" flex bg-gray-800 text-white min-h-screen font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <SocialLinks />
                <main className="grid bg-gray-800 gap-16">
                  <About />
                  <Projects />
                  <Resume />
                  <Contact />
                  <Footer />
                </main>
              </>
            }
          />
          <Route
            path="/allprojects"
            element={
              <>
                <AllProjects />
              </>
            }
          />
          {/* <Route path="/" element={<TestGit />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
