import React from 'react';

export default function ShippingPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-text-charcoal mb-8">Shipping & Returns</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Shipping Policy</h2>
          <p className="text-gray-600 mb-4">
            At Divine's Wrist Wear, we strive to deliver your timepiece as quickly and safely as possible.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>Free Shipping:</strong> We offer free standard shipping on all orders over $100.</li>
            <li><strong>Processing Time:</strong> Orders are processed within 1-2 business days.</li>
            <li><strong>Standard Delivery:</strong> 3-5 business days within the continental US.</li>
            <li><strong>Express Delivery:</strong> 1-2 business days (additional fees apply).</li>
            <li><strong>International Shipping:</strong> Available to select countries. Delivery times vary by location (typically 7-14 business days).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary-gold mb-4">Return Policy</h2>
          <p className="text-gray-600 mb-4">
            We want you to love your new watch. If you are not completely satisfied, we accept returns within 30 days of delivery.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Items must be unworn, in original packaging, with all tags and protective stickers intact.</li>
            <li>Proof of purchase is required.</li>
            <li>Return shipping costs are the responsibility of the customer, unless the item is defective or incorrect.</li>
            <li>Refunds will be processed to the original payment method within 5-7 business days of receiving the return.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-gold mb-4">How to Initiate a Return</h2>
          <p className="text-gray-600">
            To start a return, please contact our support team at <a href="mailto:support@divineswristwear.com" className="text-primary-gold hover:underline">support@divineswristwear.com</a> with your order number and reason for return.
          </p>
        </section>
      </div>
    </div>
  );
}
