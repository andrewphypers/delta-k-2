import logoImage from 'figma:asset/18be65b0dd811e67ddb7de17968686d567ee83f8.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'light' | 'dark';
}

export function Logo({ className = "", variant = 'full' }: LogoProps) {
  return (
    <div className={`${className} flex items-center gap-4`}>
      <img 
        src={logoImage} 
        alt="Delta K Logo" 
        className="h-full w-auto object-contain"
      />
      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <div className="text-2xl md:text-3xl font-bold text-white">
            DELTA K
          </div>
          <div className="text-xs tracking-wider text-amber-400">
            KOOTENAY GROUP
          </div>
        </div>
      )}
    </div>
  );
}