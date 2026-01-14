import { Button } from '@/app/components/ui/button';
import { Handshake, TrendingUp, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Handshake,
    title: 'Strong Community Ties',
    description: 'Build relationships rooted in trust and mutual respect'
  },
  {
    icon: TrendingUp,
    title: 'Economic Growth',
    description: 'Support indigenous economic development and regional prosperity'
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Access deep knowledge of the Kootenays and local networks'
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Partner with a fully licensed, insured, and experienced team'
  }
];

export function Partners() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-48 h-48">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
              <Handshake className="w-4 h-4" />
              Partnership Opportunities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are looking to partner with businesses in the Kootenays. Let's talk about the benefits of partnering with Ktunaxa owned businesses.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-amber-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <pattern id="partnership-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="currentColor" className="text-slate-900"/>
                </pattern>
                <rect width="100" height="100" fill="url(#partnership-pattern)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl text-slate-900 mb-4">
                Ready to Build a Partnership?
              </h3>
              <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in supporting indigenous-led economic development while gaining access to professional electrical services with deep roots in the Kootenays.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={scrollToTop}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8"
                >
                  Get In Touch
                </Button>
                <a href="tel:+12504028124">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-lg px-8 w-full sm:w-auto"
                  >
                    Call (250)-402-8124
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}