
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-deeper-purple text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">AuthorityX</h2>
            <p className="mt-2 text-sm text-gray-300">
              Your all-in-one personal branding automation suite.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-brand-purple">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features/optimize" className="text-gray-300 hover:text-brand-purple">
                  Brand Analyzer
                </Link>
              </li>
              <li>
                <Link to="/features/strategy" className="text-gray-300 hover:text-brand-purple">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link to="/features/calendar" className="text-gray-300 hover:text-brand-purple">
                  Content Calendar
                </Link>
              </li>
              <li>
                <Link to="/features/writer" className="text-gray-300 hover:text-brand-purple">
                  Content Writer
                </Link>
              </li>
              <li>
                <Link to="/features/share" className="text-gray-300 hover:text-brand-purple">
                  Post & Share
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-brand-purple">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-brand-purple">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-purple">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-brand-purple">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-brand-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-300 hover:text-brand-purple">
                  Data Security
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-gray-300 hover:text-brand-purple">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} AuthorityX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
