import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
