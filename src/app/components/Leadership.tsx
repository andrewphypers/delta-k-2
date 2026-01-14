import { Briefcase, Scale, Zap } from 'lucide-react';

const leaders = [
  {
    name: 'Andrew Phypers',
    role: 'Co-Owner',
    icon: Scale,
    credentials: [
      'Status Member of Lower Kootenay Band',
      'Lawyer',
      'Entrepreneur with business interests throughout the Kootenays and Alberta'
    ]
  },
  {
    name: 'Steve Dressel',
    role: 'Co-Owner',
    icon: Zap,
    credentials: [
      'Co-owner and General Manager',
      'Decades of experience in electrical projects throughout BC',
      'Expert in commercial and industrial electrical systems',
      'Deep commitment to quality and safety standards'
    ]
  },
  {
    name: 'Dave Comer',
    role: 'Co-Owner',
    icon: Briefcase,
    credentials: [
      'Decades of experience in electrical projects throughout BC',
      'Specialist in residential and renovation work',
      'Co-owner of Delta Tritec Group Ltd providing services in Greater Vancouver Area',
      'Dedicated to customer satisfaction and excellence'
    ]
  }
];

export function Leadership() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-600"/>
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-600"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              100% Indigenous Owned
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Together, our co-owners proudly form an electrical company with strong roots in the Kootenays, combining legal expertise, entrepreneurial vision, and decades of hands-on electrical experience.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader) => (
            <div 
              key={leader.name} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <leader.icon className="w-8 h-8 text-white" />
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h3 className="text-2xl text-slate-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-amber-600 font-medium">
                  {leader.role}
                </p>
              </div>

              {/* Credentials */}
              <ul className="space-y-3">
                {leader.credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" className="text-amber-400"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-amber-400"></div>
                <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
                <div className="h-px w-12 bg-amber-400"></div>
              </div>
              
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                As a status member of the <span className="text-amber-400 font-medium">Lower Kootenay Band</span>, Andrew brings indigenous leadership and legal acumen to Delta K. Combined with Steve and Dave's extensive electrical expertise, our team delivers professional service rooted in community values and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}