'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if user has already seen the animation in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenLoadingAnimation');
    
    if (hasSeenAnimation) {
      setIsLoading(false);
      return;
    }

    // Start fade out after 3.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete animation after 4 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasSeenLoadingAnimation', 'true');
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <div className="relative">
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-cyan-500/30 animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center animation-delay-150">
            <div className="w-48 h-48 rounded-full border-4 border-blue-500/20 animate-ping"></div>
          </div>
          
          {/* Main logo container */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 animate-scale-in">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-pulse-glow overflow-hidden">
              <Image
                src="/logo-transparent.png"
                alt="DS Biomedical Logo"
                width={160}
                height={160}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain animate-float"
              />
            </div>
          </div>
        </div>

        {/* Business Name with typing effect */}
        <div className="text-center animate-fade-in-up animation-delay-300">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2 animate-shimmer">
            DS Biomedical & IT Services
          </h1>
          <p className="text-slate-400 text-sm sm:text-base animate-fade-in animation-delay-500">
            Senior Biomedical Engineer – Debojyoti Saha
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden animate-fade-in animation-delay-700">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-loading-bar"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5),
                        0 0 40px rgba(6, 182, 212, 0.3),
                        0 0 60px rgba(6, 182, 212, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.8),
                        0 0 60px rgba(6, 182, 212, 0.5),
                        0 0 90px rgba(6, 182, 212, 0.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}
