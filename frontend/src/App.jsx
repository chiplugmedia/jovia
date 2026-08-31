import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy"; // Added Privacy page import
import Terms from "@/pages/Terms"; // Added Terms page import
import TelegramSupport from "@/components/TelegramSupport"; // Changed from @/pages/

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Glow Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-20 top-[40%] h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[150px]" />
        <div className="absolute bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <TelegramSupport />
      </div>
    </BrowserRouter>
  );
}