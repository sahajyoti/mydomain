'use client';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'emerald' | 'blue' | 'purple' | 'gradient';
}

export default function AnimatedBackground({ 
  children, 
  className = '', 
  variant = 'emerald' 
}: AnimatedBackgroundProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'emerald':
        return 'bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-emerald-900/30';
      case 'blue':
        return 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950/30 dark:via-cyan-950/30 dark:to-blue-900/30';
      case 'purple':
        return 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-purple-900/30';
      case 'gradient':
        return 'bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-700 dark:to-green-700';
      default:
        return 'bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${getVariantClasses()}`} />
        
        {/* Floating Circles Animation */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-300/20 dark:bg-green-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-teal-300/20 dark:bg-teal-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
