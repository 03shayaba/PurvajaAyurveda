export const metadata = {
  title: 'Terms & Conditions - Purvaj Ayurveda',
  description: 'Terms and Conditions of Purvaj Ayurveda',
};

export default function Terms() {
  return (
    <div>
      <section className="h-[200px] flex items-center justify-center bg-primary-dark">
        <div className="text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Terms & Conditions</h1>
        </div>
      </section>

      <section className="py-12 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="font-serif text-xl font-bold mb-3">1. Acceptance of Terms</h2>
                <p>By accessing and using the Purvaj Ayurveda website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">2. Product Information</h2>
                <p>We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or pricing are accurate, complete, or error-free. If a product is listed at an incorrect price, we reserve the right to refuse or cancel orders.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">3. Orders and Payment</h2>
                <p>All orders are subject to availability. We reserve the right to refuse any order you place with us. Payment must be completed at the time of order placement.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">4. Shipping and Delivery</h2>
                <p>Delivery times may vary based on location. We are not responsible for delays caused by shipping carriers or force majeure events.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">5. Returns and Refunds</h2>
                <p>We want you to be satisfied with your purchase. If you are not satisfied, please contact us within 7 days of delivery for a return or exchange. Products must be unused and in original packaging.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">6. Intellectual Property</h2>
                <p>All content on this website is the property of Purvaj Ayurveda and may not be reproduced without written permission.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">7. Limitation of Liability</h2>
                <p>Purvaj Ayurveda will not be liable for any damages arising from the use of our products or website. Our products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">8. Governing Law</h2>
                <p>These terms and conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Sonipat, Haryana, India.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold mb-3">9. Contact Information</h2>
                <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
                <p className="mt-2">Email: info@purvajaayurveda.com</p>
                <p>Phone: 090539 15050</p>
                <p>Address: Sonipat, Sonipat, India, 131001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}