import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Resume } from './components/sections/Resume';
import { Skills } from './components/sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
