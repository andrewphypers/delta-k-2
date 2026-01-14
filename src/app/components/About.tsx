import { Award, Shield, Users, MapPin } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Decades of Experience',
    description: 'Our seasoned team brings extensive knowledge and expertise to every project'
  },
  {
    icon: Shield,
    title: 'Fully Insured & Licensed',
    description: 'Complete peace of mind with comprehensive insurance and professional certifications'
  },
  {
    icon: MapPin,
    title: 'Deep Community Roots',
    description: 'Proudly serving the Kootenays with a commitment to our local communities'
  },
  {
    icon: Users,
    title: 'Indigenous Owned',
    description: '100% Indigenous-owned business supporting local economic growth and partnerships'
  }
];

export function About() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-48 h-48">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Why Choose Delta K
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Built on a foundation of excellence, integrity, and deep respect for the communities we serve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl text-white mb-2">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative divider with indigenous-inspired pattern */}
        <div className="mt-16 pt-16 border-t border-slate-800">
          <div className="flex items-center justify-center gap-4">
            <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-4 h-4 border-2 border-amber-400"></div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-300 leading-relaxed">
            As a 100% Indigenous-owned company, we bring a unique perspective to our work, combining traditional values of craftsmanship and community stewardship with modern electrical expertise. Our strong roots in the Kootenays drive our commitment to delivering exceptional service while contributing to the economic strength of our region.
          </p>
        </div>
      </div>
    </section>
  );
}
