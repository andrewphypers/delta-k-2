import { Button } from '@/app/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Ready to Power<br />
              <span className="text-amber-500">Your Next Project?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Get in touch with our team for a free consultation and quote. We're here to help with all your electrical needs.
            </p>
            <a href="tel:+12504028124">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8">
                Call (250)-402-8124
              </Button>
            </a>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-slate-50 rounded-lg p-8 lg:p-10">
            <h3 className="text-2xl text-slate-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Phone</p>
                  <a href="tel:+12504028124" className="text-xl text-slate-900 hover:text-amber-500 transition-colors">
                    (250)-402-8124
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Email</p>
                  <a href="mailto:steve@deltatec.ca" className="text-xl text-slate-900 hover:text-amber-500 transition-colors">
                    steve@deltatec.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Service Area</p>
                  <p className="text-xl text-slate-900">
                    The Kootenays, BC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Hours</p>
                  <p className="text-xl text-slate-900">
                    Mon-Fri: 7AM - 5PM
                  </p>
                  <p className="text-slate-600">
                    Emergency services available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}