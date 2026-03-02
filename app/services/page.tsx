export default function Services() {
  const biomedicalServices = [
    {
      title: "🔹 Critical Care Equipment",
      items: [
        "ECG Machines",
        "Ventilators",
        "Patient Monitors",
        "Dialysis Units",
        "Infusion Pumps"
      ],
      description: "Comprehensive servicing, troubleshooting, preventive maintenance, and calibration to ensure patient safety and machine accuracy."
    },
    {
      title: "🔹 Physiotherapy Equipment",
      items: [
        "UST (Ultrasound Therapy)",
        "IFT & TENS Units",
        "Laser Therapy Equipment",
        "Shortwave Diathermy"
      ],
      description: "Specialized maintenance and repair for rehabilitation and physiotherapy centers."
    },
    {
      title: "🔹 General Care Equipment",
      items: [
        "Digital BP Machines",
        "Electronic Weight Scales",
        "Defibrillators",
        "NICU Warmers",
        "Infant Incubators"
      ],
      description: "Reliable service support to maintain consistent performance and compliance with safety standards."
    }
  ];

  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional Biomedical & IT Solutions</p>
        </div>
      </section>

      {/* Biomedical Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          👨‍⚕️ Biomedical Services
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Precision repair, calibration, preventive maintenance, and AMC support for multi-brand equipment.
        </p>
        <p className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-12">
          Note: CT, MRI, and X-Ray systems are excluded.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {biomedicalServices.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {service.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 dark:text-gray-300 border-t border-blue-200 dark:border-gray-600 pt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IT Services */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            💻 IT Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Digital & IT Solutions for Businesses
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            In addition to biomedical services, we provide professional IT solutions for healthcare centers and businesses:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🌐 Website Development</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Professional website design and development for healthcare centers and businesses.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🔗 Domain Registration</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Domain registration assistance to establish your online presence.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🖥️ Web Hosting Setup</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Reliable web hosting setup and configuration for optimal performance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🛠️ Technical Support</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Basic technical support to help your business run smoothly.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            Helping clinics, diagnostic centers, and small businesses establish a strong digital presence.
          </p>
        </div>
      </section>

      {/* Service Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          ✅ Our Service Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400">Reach out with your requirements</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Assessment</h3>
            <p className="text-gray-600 dark:text-gray-400">We evaluate your equipment</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Service</h3>
            <p className="text-gray-600 dark:text-gray-400">Professional maintenance & repair</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Support</h3>
            <p className="text-gray-600 dark:text-gray-400">Ongoing maintenance & support</p>
          </div>
        </div>
      </section>
    </main>
  );
}
