export const metadata = {
  title: 'Privacy Policy - Purvaj Ayurveda',
  description: 'Privacy Policy of Purvaj Ayurveda',
};

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="h-[200px] flex items-center justify-center bg-primary-dark">
        <div className="text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-12 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="font-serif text-xl font-bold mb-3">1. Introduction</h2>
                <p>Purvaj Ayurveda respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">2. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including but not limited to:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Name and contact information</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information</li>
                  <li>Order history and preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">4. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">5. Data Security</h2>
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">6. Your Consent</h2>
                <p>By using our website, you consent to our privacy policy.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">7. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2">Email: info@purvajaayurveda.com</p>
                <p>Phone: 090539 15050</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}