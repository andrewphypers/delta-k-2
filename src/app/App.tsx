import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { About } from '@/app/components/About';
import { Leadership } from '@/app/components/Leadership';
import { Contact } from '@/app/components/Contact';
import { Partners } from '@/app/components/Partners';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}