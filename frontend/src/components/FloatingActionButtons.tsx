'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Bottom Left: Phone and WhatsApp */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-4 z-40">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-whatsapp-green text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+1234567890"
          className="p-3 bg-trust-blue text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Phone"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Bottom Right: Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-trust-blue-light text-white rounded-full shadow-lg hover:bg-trust-blue transition-colors z-40"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
