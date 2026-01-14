import { Logo } from '@/app/components/Logo';
import { Button } from '@/app/components/ui/button';
import { Handshake, Phone } from 'lucide-react';

export function Header() {
  const scrollToPartners = () => {
    const partnersSection = document.getElementById('partners');
    if (partnersSection) {
      partnersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo className="h-14" variant="full" />
          </div>

          {/* Right side CTAs */}
          <div className="flex items-center gap-3">
            {/* Partner CTA - prominent */}
            <Button 
              onClick={scrollToPartners}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 gap-2 hidden sm:flex"
            >
              <Handshake className="w-4 h-4" />
              Partner with Ktunaxa Business
            </Button>

            {/* Mobile version - shorter text */}
            <Button 
              onClick={scrollToPartners}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 gap-2 flex sm:hidden"
            >
              <Handshake className="w-4 h-4" />
              Partner With Us
            </Button>

            {/* Phone CTA */}
            <a href="tel:+12504028124">
              <Button 
                variant="outline" 
                className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-900 gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">(250)-402-8124</span>
                <span className="md:hidden">Call</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}