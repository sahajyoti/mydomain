'use client';

import { useState } from 'react';
import { siteProfile } from '@/data/site';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    equipmentType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would normally send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      equipmentType: '',
      message: ''
    });
  };

  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with {siteProfile.owner} for service inquiries</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Connect with {siteProfile.owner}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-8">
              Choose your preferred way to reach out for service inquiries.
            </p>

            <div className="space-y-6 mb-12">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  📱 WhatsApp
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  <a 
                    href={siteProfile.whatsappUrl}
                    className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-semibold break-all"
                  >
                    {siteProfile.phone}
                  </a>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  Fast response via WhatsApp
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  📧 Email
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  <a 
                    href={`mailto:${siteProfile.email}`}
                    className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-semibold break-all"
                  >
                    {siteProfile.email}
                  </a>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  Detailed service inquiries
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  🔗 LinkedIn
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  <a 
                    href={siteProfile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-semibold"
                  >
                    Connect with Debojyoti
                  </a>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  Professional profile
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                ⏱️ Response Time
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              📝 Service Request Form
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Have a service requirement? Fill out the form below and we will get back to you as soon as possible.
            </p>

            {submitted && (
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 p-4 rounded-lg mb-6">
                <p className="text-green-800 dark:text-green-100 font-semibold">
                  ✓ Thank you! We will get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Equipment Type *
                </label>
                <select
                  name="equipmentType"
                  value={formData.equipmentType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select equipment type</option>
                  <option value="ecg">ECG Machine</option>
                  <option value="ventilator">Ventilator</option>
                  <option value="monitor">Patient Monitor</option>
                  <option value="dialysis">Dialysis Unit</option>
                  <option value="infusion">Infusion Pump</option>
                  <option value="ust">UST Equipment</option>
                  <option value="ift-tens">IFT & TENS Units</option>
                  <option value="laser">Laser Therapy</option>
                  <option value="bp">Digital BP Machine</option>
                  <option value="scale">Electronic Scale</option>
                  <option value="defibrillator">Defibrillator</option>
                  <option value="incubator">Incubator/Warmer</option>
                  <option value="website">Website Development</option>
                  <option value="hosting">Web Hosting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Describe your service requirement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Send Service Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
