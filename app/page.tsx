import { Navbar } from '@/components/portfolio/navbar';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { GamesSection } from '@/components/portfolio/games-section';
import { InstagramFeed } from '@/components/portfolio/instagram-feed';
import { Contact } from '@/components/portfolio/contact';
import { Footer } from '@/components/portfolio/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GamesSection />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
