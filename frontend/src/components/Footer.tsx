import Link from 'next/link';
import { Camera, Globe, Video, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-trust-blue mb-4 block">
              MBBSGroup
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              123 Education Lane, Knowledge Park,
              Nashik, Maharashtra, 422009
            </p>
            <a href="mailto:info@mbbsgroup.com" className="text-trust-blue hover:underline text-sm mb-4 block">
              info@mbbsgroup.com
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-whatsapp-green transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-trust-blue">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-trust-blue">Blog</Link></li>
              <li><Link href="/gallery" className="hover:text-trust-blue">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-trust-blue">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">MBBS in India</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-trust-blue">Maharashtra</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Karnataka</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Uttar Pradesh</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Tamil Nadu</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">BDS in India</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-trust-blue">Top BDS Colleges</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Admission Process</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Fees Structure</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Counselling</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">MBBS Abroad</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-trust-blue">Russia</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Georgia</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Kazakhstan</Link></li>
              <li><Link href="#" className="hover:text-trust-blue">Uzbekistan</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-trust-blue text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-center">
          &copy; {new Date().getFullYear()} MBBSGroup Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
