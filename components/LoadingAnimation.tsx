'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCode, FaCss3Alt, FaHtml5, FaJsSquare, FaMicroscope, FaNodeJs } from 'react-icons/fa';

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

    // Start fade out after 8.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 8500);

    // Complete animation after 9 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasSeenLoadingAnimation', 'true');
    }, 9000);

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
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-slate-800 via-[#12283a] to-slate-900 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-8 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <div className="relative">
          {/* Skill badges - positioned around circle */}
          {/* Top */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-32 flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200 animate-float animation-delay-150">
            <FaCode className="text-blue-300" /> Code
          </div>
          {/* Top-left */}
          <div className="absolute -left-32 -top-12 flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200 animate-float animation-delay-300">
            <FaHtml5 className="text-orange-300" /> HTML
          </div>
          {/* Left */}
          <div className="absolute -left-36 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-200 animate-float animation-delay-500">
            <FaJsSquare className="text-yellow-300" /> JS
          </div>
          {/* Right */}
          <div className="absolute -right-40 top-1/4 flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200 animate-float animation-delay-700">
            <FaCss3Alt className="text-cyan-300" /> CSS
          </div>
          {/* Bottom-right */}
          <div className="absolute -right-32 -bottom-12 flex items-center gap-2 rounded-full border border-green-300/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-200 animate-float animation-delay-300">
            <FaNodeJs className="text-green-300" /> Node.js
          </div>
          {/* Bottom */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-48 flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200 animate-float animation-delay-500">
            <FaMicroscope className="text-violet-300" /> Microscope
          </div>

          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-white/20 animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center animation-delay-150">
            <div className="w-56 h-56 rounded-full border-4 border-white/10 animate-ping"></div>
          </div>
          
          {/* Main logo container */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 animate-scale-in">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-2xl shadow-cyan-500/20 animate-pulse-glow overflow-hidden border-4 border-white/20">
              <Image
                src="/file_000000000a607208a8ac6109a01e508c-removebg-preview.png"
                alt="DS Biomedical Logo"
                width={440}
                height={440}
                priority
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain animate-logo-zoom scale-150"
              />
            </div>
          </div>
        </div>

        {/* Business Name with typing effect */}
        <div className="text-center animate-fade-in-up animation-delay-300">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-300 mb-2 animate-shimmer tracking-wide">
            DS BIOMEDICAL & IT SERVICES
          </h1>
          <p className="text-slate-200 text-sm sm:text-base animate-fade-in animation-delay-500">
            Engineering Precision in Healthcare
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1.5 bg-slate-700/50 rounded-full overflow-hidden animate-fade-in animation-delay-700">
          <div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full animate-loading-bar-continuous"></div>
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

        @keyframes loading-bar-continuous {
          0% {
            transform: translateX(-100%) scaleX(0.5);
          }
          50% {
            transform: translateX(50%) scaleX(1);
          }
          100% {
            transform: translateX(400%) scaleX(0.5);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.35),
                        0 0 40px rgba(34, 211, 238, 0.2),
                        0 0 60px rgba(34, 211, 238, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(52, 211, 153, 0.55),
                        0 0 60px rgba(52, 211, 153, 0.35),
                        0 0 90px rgba(52, 211, 153, 0.2);
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

        @keyframes logo-zoom {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          40% {
            transform: scale(1.15);
            opacity: 1;
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
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

        .animate-loading-bar-continuous {
          animation: loading-bar-continuous 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .animate-logo-zoom {
          animation: logo-zoom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), float 2.2s ease-in-out infinite 1.2s;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
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
