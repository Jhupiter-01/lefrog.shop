import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { OurStory } from '@/components/OurStory/OurStory';
import { Services } from '@/components/Services/Services';
import { FAQ } from '@/components/FAQ/FAQ';
import { Gallery } from '@/components/Gallery/Gallery';
import { Contact } from '@/components/Contact/Contact';
import '@/styles/main.css';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="app">
        <Header />
        <main>
          <Hero />
          <OurStory />
          <Services />
          <FAQ />
          <Gallery />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
