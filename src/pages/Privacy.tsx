
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              At AuthorityX, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our personal branding automation suite.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our platform.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you register on our platform, express interest in obtaining information about us or our products, or otherwise contact us. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Job title and company information</li>
              <li>Social media handles and profiles</li>
              <li>Content uploaded to our platform (such as documents, images, or text)</li>
              <li>Billing information</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3">2.2 Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our platform, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Unique device identifiers</li>
              <li>Referral sources</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing, operating, and maintaining our platform</li>
              <li>Improving, personalizing, and expanding our platform</li>
              <li>Understanding and analyzing how you use our platform</li>
              <li>Developing new products, services, features, and functionality</li>
              <li>Communicating with you about updates, security alerts, and support</li>
              <li>Sending you marketing and promotional communications (with opt-out options)</li>
              <li>Processing transactions and sending billing information</li>
              <li>Protecting against fraudulent, unauthorized, or illegal activity</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">
              We may share information we have collected in certain situations, including:
            </p>
            
            <h3 className="text-xl font-medium mb-3">4.1 Business Transfers</h3>
            <p className="mb-4">
              If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
            </p>
            
            <h3 className="text-xl font-medium mb-3">4.2 Third-Party Service Providers</h3>
            <p className="mb-4">
              We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.
            </p>
            
            <h3 className="text-xl font-medium mb-3">4.3 Legal Requirements</h3>
            <p>
              We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Right to access the personal information we have about you</li>
              <li>Right to rectify inaccurate personal information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict processing of your personal information</li>
              <li>Right to data portability</li>
              <li>Right to object to processing of your personal information</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@authorityx.com.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and use information about you. For more information about how we use these technologies and how you can control them, please see our <Link to="/cookies" className="text-brand-purple hover:underline">Cookie Policy</Link>.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="mb-4">
              Our platform is not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from children under 18. If we learn we have collected personal information from a child under 18, we will delete that information as quickly as possible.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Revised" date at the top of this page.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this privacy policy, please contact us at:
            </p>
            <div className="mb-4">
              <p><strong>Email:</strong> privacy@authorityx.com</p>
              <p><strong>Address:</strong> 123 Brand St, San Francisco, CA 94103</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
