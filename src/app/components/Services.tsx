import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Home, Wrench, Factory } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'New Construction',
    description: 'Complete electrical installations for new residential and commercial buildings. From initial planning to final inspection, we ensure your project meets all safety standards and electrical codes.',
    image: 'https://images.unsplash.com/photo-1767514536570-83d70c024247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nJTIwcmVzaWRlbnRpYWx8ZW58MXx8fHwxNzY4NDE0NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Wrench,
    title: 'Renovations & Upgrades',
    description: 'Modernize your electrical systems with expert renovation services. Panel upgrades, rewiring, lighting design, and smart home integration tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHBhbmVsfGVufDF8fHx8MTc2ODQxNDU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Factory,
    title: 'Industrial Maintenance',
    description: 'Reliable maintenance and repair services for industrial facilities. Preventive maintenance programs, emergency repairs, and system optimization to keep your operations running smoothly.',
    image: 'https://images.unsplash.com/photo-1509390726584-faaa21c8ac95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZWxlY3RyaWNhbCUyMHBvd2VyJTIwbGluZXN8ZW58MXx8fHwxNzY4NDE0NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions for every need, from residential projects to industrial facilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group relative bg-slate-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4 -mt-12 relative z-10">
                  <service.icon className="w-6 h-6 text-slate-900" />
                </div>
                
                <h3 className="text-2xl text-slate-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}