import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DashboardPreview />
        <Testimonials />
      </main>
    </div>
  );
}
