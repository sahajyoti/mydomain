'use client';

import { siteProfile } from '@/data/site';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 w-72 animate-in slide-in-from-bottom-5 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{siteProfile.brand}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-3">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Hi! How can we help you with biomedical equipment services?
              </p>
            </div>
            <a
              href={siteProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center text-sm transition-colors"
            >
              Start Chat
            </a>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      </div>
    </>
  );
}
