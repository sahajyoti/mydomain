export default function About() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Learn about Debojyoti Saha and DS Biomedical & IT Services</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Senior Biomedical Engineer – Debojyoti Saha
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            DS Biomedical & IT Services is led by Debojyoti Saha, an experienced Senior Biomedical Engineer specializing in high-end maintenance, troubleshooting, calibration, and Annual Maintenance Contracts (AMC) for multi-brand hospital and physiotherapy equipment.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Our Focus & Commitment
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            With hands-on experience in critical care infrastructure, the focus is always on:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-8">
            <li className="text-lg">Ensuring zero downtime for life-saving machines</li>
            <li className="text-lg">Maintaining international service standards</li>
            <li className="text-lg">Delivering fast and reliable technical support</li>
            <li className="text-lg">Providing cost-effective service solutions</li>
          </ul>

          <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-8">
            We work with precision, responsibility, and a deep understanding of healthcare technology systems.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            🏥 Professional Experience
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Worked with Global Standards
          </h3>

          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Manipal Hospital (Formerly AMRI Mukundapur)
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Extensive experience in managing and maintaining critical care medical equipment. Ensured smooth functioning of ICU, NICU, dialysis, and physiotherapy systems with minimal breakdown time.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 p-8 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Siemens Healthineers – World-Class Training
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Received advanced technical exposure and professional training from one of the world's leading medical technology companies, strengthening expertise in biomedical diagnostics and patient care systems.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            ⭐ Why Choose Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">✓ Experienced Senior Biomedical Engineer</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">✓ Fast Response & On-Site Support</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">✓ Affordable Service Packages</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">✓ Preventive Maintenance Expertise</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">✓ Quality & Safety Focused</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">✓ Transparent Communication</p>
            </div>
          </div>

          <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-12">
            Your equipment reliability is our responsibility.
          </p>
        </div>
      </section>
    </main>
  );
}
