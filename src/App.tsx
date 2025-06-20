import Navbar from "./components/navbar";
import Projects from "./components/project";

function App() {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <main className="bg-gray-800">
        <Projects />
      </main>
    </div>
  );
}

export default App;
