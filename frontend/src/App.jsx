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
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
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