
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to AuthorityX. These Terms of Service ("Terms") govern your access to and use of the AuthorityX platform, including any services, features, content, or applications offered by AuthorityX ("Service").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"AuthorityX,"</strong> "we," "us," and "our" refer to AuthorityX, Inc.</li>
              <li><strong>"User,"</strong> "you," and "your" refer to any individual or entity that accesses or uses the Service.</li>
              <li><strong>"Content"</strong> refers to any text, images, graphics, videos, data, or other materials or content that is posted, uploaded, or otherwise made available through the Service.</li>
              <li><strong>"User Content"</strong> refers to Content that is uploaded, posted, or otherwise submitted by users to the Service.</li>
              <li><strong>"Intellectual Property Rights"</strong> means all patent rights, copyright rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights that may exist now or come into existence in the future.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration and Requirements</h2>
            <p className="mb-4">
              To access certain features of the Service, you may be required to register for an account. When registering for an account, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
            </p>
            <p className="mb-4">
              You agree to accept responsibility for all activities that occur under your account or password. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
            <p>
              We reserve the right to refuse service, terminate accounts, or remove or edit content in our sole discretion.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Subscription and Billing</h2>
            <p className="mb-4">
              Some aspects of the Service may be provided for a fee or other charge. If you elect to use paid aspects of the Service, you agree to the pricing and payment terms as we may update them from time to time.
            </p>
            <p className="mb-4">
              AuthorityX may change the fees for the Service at any time, provided that, for existing subscriptions, the change will become effective at the start of the next subscription period. You will be notified of any change in fees at least 30 days before the change takes effect.
            </p>
            <p className="mb-4">
              Unless otherwise stated, all fees are quoted in U.S. Dollars. You are responsible for paying all fees associated with using the Service and all applicable taxes.
            </p>
            <p>
              Your subscription will automatically renew for the subscription period you select when you sign up, and you authorize us to charge the then-applicable fee using your selected payment method. If you wish to cancel your subscription, you may do so at any time, and cancellation will be effective at the end of the current subscription period.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
            <p className="mb-4">
              The Service allows you to post, upload, or otherwise make available Content. You retain all rights in, and are solely responsible for, the User Content you post to the Service.
            </p>
            <p className="mb-4">
              By submitting User Content to the Service, you grant AuthorityX a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Service and AuthorityX's business, including without limitation for promoting and redistributing part or all of the Service.
            </p>
            <p className="mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You own or have the necessary licenses, rights, consents, and permissions to use and authorize AuthorityX to use all Intellectual Property Rights in and to any User Content.</li>
              <li>Your User Content, and the use of your User Content as contemplated by these Terms, does not and will not: (i) infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right; (ii) violate any applicable law or regulation; or (iii) require obtaining a license from or paying any fees or royalties to any third party.</li>
            </ul>
            <p>
              AuthorityX reserves the right to remove any User Content from the Service at any time, for any reason (including, but not limited to, if someone alleges you contributed that Content in violation of these Terms), in our sole discretion, and without notice.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
            <p className="mb-4">
              You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate AuthorityX, an AuthorityX employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm AuthorityX or users of the Service or expose them to liability.</li>
              <li>To use the Service in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Service.</li>
              <li>To use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</li>
              <li>To use any manual process to monitor or copy any of the material on the Service or for any other unauthorized purpose without our prior written consent.</li>
              <li>To use any device, software, or routine that interferes with the proper working of the Service.</li>
              <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
              <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
              <li>To attack the Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
              <li>To otherwise attempt to interfere with the proper working of the Service.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by AuthorityX, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms permit you to use the Service for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
              <li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.</li>
            </ul>
            <p>
              You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify copies of any materials from this site.</li>
              <li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.</li>
              <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.</li>
              <li>Access or use for any commercial purposes any part of the Service or any services or materials available through the Service.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="mb-4">
              If you wish to terminate your account, you may simply discontinue using the Service, or request account deletion through the settings page.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimer</h2>
            <p className="mb-4">
              YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. AUTHORITYX EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
            </p>
            <p>
              AUTHORITYX MAKES NO WARRANTY THAT (I) THE SERVICE WILL MEET YOUR REQUIREMENTS, (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL AUTHORITYX, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICE, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless AuthorityX, its parent corporation, officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms; (iii) your violation of any third party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party. This defense and indemnification obligation will survive these Terms and your use of the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div>
              <p><strong>Email:</strong> legal@authorityx.com</p>
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

export default Terms;
