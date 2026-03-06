import Link from 'next/link';
import { siteProfile } from '@/data/site';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2 animate-pulse">{siteProfile.brand}</h3>
            <p className="text-slate-400">{siteProfile.role} – {siteProfile.owner}</p>
            <p className="text-slate-300 text-sm mt-2 font-medium">Biomedical Equipment Maintenance & IT Solutions</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-cyan-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-slate-400 mb-3">
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp: {siteProfile.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 mb-3">
              <FaEnvelope className="text-xl" />
              <span>Email: {siteProfile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <FaLinkedin className="text-xl" />
              <a href={siteProfile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                View Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6">
          <p className="text-center text-slate-400 text-sm">
            © {siteProfile.year} {siteProfile.brand}. All Rights Reserved.
          </p>
          <p className="text-center text-slate-400 text-sm mt-2">
            Providing trusted service support for hospitals, clinics, physiotherapy centers, and healthcare facilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
