import React from 'react';

export default function WarrantyPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-text-charcoal mb-8">Warranty Information</h1>
        
        <div className="bg-gray-50 border-l-4 border-primary-gold p-6 mb-10">
          <p className="text-lg font-medium text-gray-800">
            Every Divine's Wrist Wear timepiece is backed by our comprehensive <strong>2-Year International Warranty</strong>.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary-gold mb-4">What is Covered?</h2>
          <p className="text-gray-600 mb-4">
            Our warranty covers manufacturing defects in material and workmanship under normal use for a period of two (2) years from the date of purchase.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Watch movement (mechanism)</li>
            <li>Hands and dial</li>
            <li>Manufacturing defects in the case or bracelet</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary-gold mb-4">What is Not Covered?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Battery life (standard battery life is 18-24 months).</li>
            <li>Normal wear and tear (scratches on case, crystal, or strap).</li>
            <li>Damage caused by accidents, mishandling, or negligence (crushed, broken crystal, etc.).</li>
            <li>Water damage if the watch is not marked as water-resistant or if instructions were not followed (e.g., crown not pushed in).</li>
            <li>Alterations or repairs performed by unauthorized third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-gold mb-4">Claiming Warranty Service</h2>
          <p className="text-gray-600 mb-4">
            If you believe your watch has a manufacturing defect, please follow these steps:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Contact our support team at <a href="mailto:support@divineswristwear.com" className="text-primary-gold hover:underline">support@divineswristwear.com</a>.</li>
            <li>Provide your order number, proof of purchase, and a detailed description (with photos) of the issue.</li>
            <li>Our team will assess the claim and provide instructions for repair or replacement.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
