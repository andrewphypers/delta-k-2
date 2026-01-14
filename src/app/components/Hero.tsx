import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { Logo } from '@/app/components/Logo';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672825978900-5f3159455f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb290ZW5heSUyMG1vdW50YWlucyUyMGJyaXRpc2glMjBjb2x1bWJpYXxlbnwxfHx8fDE3Njg0MTQxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kootenay Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
      </div>

      {/* Decorative geometric pattern - subtle indigenous design element */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-400"/>
          <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-400"/>
          <circle cx="50" cy="50" r="8" fill="currentColor" className="text-amber-400"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <Logo className="h-24 md:h-32" variant="full" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Professional Electrical Services<br />
            <span className="text-amber-400">Rooted in the Kootenays</span>
          </h2>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Decades of trusted electrical expertise serving residential, commercial, and industrial clients throughout British Columbia's Kootenay region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+12504028124">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8">
                Call (250)-402-8124
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>100% Indigenous Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}