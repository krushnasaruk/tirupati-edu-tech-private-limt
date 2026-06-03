import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-trust-blue">
              MBBSGroup
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-trust-blue font-medium transition-colors">ABOUT</Link>
            <Link href="/top-colleges?filter=india" className="text-gray-700 hover:text-trust-blue font-medium transition-colors">INDIA</Link>
            <Link href="/top-colleges" className="text-gray-700 hover:text-trust-blue font-medium transition-colors">ABROAD</Link>
            <Link href="/blog" className="text-gray-700 hover:text-trust-blue font-medium transition-colors">BLOG</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-trust-blue font-medium transition-colors">GALLERY</Link>
            <Link href="/contact" className="text-gray-700 hover:text-trust-blue font-medium transition-colors">CONTACT</Link>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="tel:+1234567890" className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-trust-blue hover:bg-trust-blue-light transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Enquire Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-trust-blue">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
