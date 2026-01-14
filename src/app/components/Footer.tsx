import { Logo } from '@/app/components/Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Logo className="h-16" variant="full" />

          {/* Copyright & Info */}
          <div className="text-center md:text-right">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Delta K Kootenay Group. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-1">
              100% Indigenous Owned | Serving the Kootenays, BC
            </p>
          </div>
        </div>

        {/* Decorative border */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 bg-amber-400"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}