
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Server, FileText, Users, CheckCircle } from "lucide-react";

const Security = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Data Security</h1>
        
        <div className="space-y-10">
          <section>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-brand-purple mr-3" />
              <h2 className="text-2xl font-semibold">Our Commitment to Security</h2>
            </div>
            <p className="mb-4">
              At AuthorityX, protecting your data is our highest priority. We understand that your personal brand information is valuable and sensitive, which is why we've implemented comprehensive security measures to ensure your data remains safe and confidential.
            </p>
            <p>
              Our security approach is built on industry best practices, robust encryption, and regular security assessments to provide you with peace of mind while using our platform.
            </p>
          </section>
          
          <section>
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-brand-purple mr-3" />
              <h2 className="text-2xl font-semibold">Data Encryption</h2>
            </div>
            <p className="mb-4">
              We use strong encryption protocols to protect your data:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Transport Layer Security (TLS)</p>
                  <p className="text-muted-foreground">All data transmitted between your browser and our servers is encrypted using TLS 1.3, ensuring that your information cannot be intercepted or read during transit.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Data-at-Rest Encryption</p>
                  <p className="text-muted-foreground">All sensitive data stored in our databases is encrypted using AES-256 encryption, one of the strongest encryption standards available.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Secure Password Storage</p>
                  <p className="text-muted-foreground">User passwords are never stored in plain text. We use bcrypt hashing algorithm with salt to ensure passwords cannot be retrieved, even in the unlikely event of a data breach.</p>
                </div>
              </li>
            </ul>
          </section>
          
          <section>
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-brand-purple mr-3" />
              <h2 className="text-2xl font-semibold">Infrastructure Security</h2>
            </div>
            <p className="mb-4">
              Our infrastructure is designed with security as a foundation:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Cloud Security</p>
                  <p className="text-muted-foreground">We host our platform on industry-leading cloud providers with SOC 2, ISO 27001, and GDPR compliance. Our infrastructure leverages these providers' robust security features including firewalls, DDoS protection, and intrusion detection systems.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Regular Security Updates</p>
                  <p className="text-muted-foreground">We maintain a rigorous schedule for applying security patches and updates to all systems and dependencies, minimizing the risk of vulnerabilities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Network Security</p>
                  <p className="text-muted-foreground">We implement strict network access controls, IP restrictions, and VPN requirements for administrative access to our systems.</p>
                </div>
              </li>
            </ul>
          </section>
          
          <section>
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-brand-purple mr-3" />
              <h2 className="text-2xl font-semibold">Content Security</h2>
            </div>
            <p className="mb-4">
              Your content is protected through multiple layers of security:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Secure File Storage</p>
                  <p className="text-muted-foreground">Documents, images, and other content you upload are stored securely with strict access controls and are encrypted both in transit and at rest.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Data Isolation</p>
                  <p className="text-muted-foreground">We maintain strict separation between customer data to ensure that your information is not accessible to other users.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Regular Backups</p>
                  <p className="text-muted-foreground">Your data is backed up regularly to prevent loss, with backups stored securely and also encrypted.</p>
                </div>
              </li>
            </ul>
          </section>
          
          <section>
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-brand-purple mr-3" />
              <h2 className="text-2xl font-semibold">Access Controls</h2>
            </div>
            <p className="mb-4">
              We maintain strict controls over who can access your data:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Role-Based Access</p>
                  <p className="text-muted-foreground">Our employees are granted the minimum level of access required to perform their job functions, following the principle of least privilege.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Multi-Factor Authentication</p>
                  <p className="text-muted-foreground">We require multi-factor authentication for all administrative access to our systems, and offer it as an option for all user accounts.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-purple mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Access Logging and Monitoring</p>
                  <p className="text-muted-foreground">All access to systems and data is logged and monitored for suspicious activity, with alerts for potential security incidents.</p>
                </div>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Compliance and Certifications</h2>
            <p className="mb-4">
              AuthorityX is committed to maintaining compliance with relevant security standards and regulations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">GDPR Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  We adhere to the requirements of the General Data Protection Regulation for all users, regardless of location.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">CCPA Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  We comply with the California Consumer Privacy Act requirements for protecting personal information.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">SOC 2 Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Our security practices are designed to meet SOC 2 standards for security, availability, and confidentiality.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Regular Security Audits</h3>
                <p className="text-sm text-muted-foreground">
                  We conduct regular third-party security assessments and penetration testing of our platform.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Security Concerns</h2>
            <p className="mb-4">
              If you believe you've found a security vulnerability or have security concerns about our platform, please contact us immediately at security@authorityx.com.
            </p>
            <p>
              We take all security reports seriously and will investigate promptly. We appreciate your help in keeping AuthorityX secure for all users.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
            <div className="space-y-2">
              <p>
                <Link to="/privacy" className="text-brand-purple hover:underline">Privacy Policy</Link> - Learn more about how we handle your data
              </p>
              <p>
                <Link to="/terms" className="text-brand-purple hover:underline">Terms of Service</Link> - Review our terms and conditions
              </p>
              <p>
                <Link to="/contact" className="text-brand-purple hover:underline">Contact Us</Link> - Reach out with any questions or concerns
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Security;
