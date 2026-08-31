import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import CallToAction from '../components/tasks';
import AboutSection from '../components/aboutus';
import TasksSection from '../components/tasks';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <Hero />
      <HowItWorks />
      <ImageGallery />
      <Faq />
      <Footer />
    </div>
  );
}
