import Navbar from "./Components/Navbar";
import { BackgroundLines } from "./Components/ui/background-lines";
import { SparklesCore } from "./Components/ui/sparkles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./Pages/Hero";import About from "./Pages/About";
import Event from "./Pages/Event";
import Features from "./Pages/Features"; 
import Contact from "./Pages/Contact"; 
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp"; 


export default function App() {
  return (
    <Router>
      <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Navbar />
        <div className="w-full absolute inset-0 ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={3}
            maxSize={2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#AAAFFF"
          />
        </div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
            <BackgroundLines/>
        
      </div>
    </Router>
  );
}
