import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import AboutSection from '../components/aboutus';
import PageHero from '@/components/PageHero';

export default function About() {
  return (
    <div className="bg-[#2C044F] text-ink antialiased">
      <Header />
      {/* Main Container with top padding matching header height */}
      <main className="pt-[80px] sm:pt-[90px]">
        <PageHero
          title="About Us"
          subtitle="Learn more about our mission, core values, and the team driving our digital innovations."
          category="About Us Evermore"
        />
        {/* Rest of the page content */}
      </main>

      <AboutSection />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
